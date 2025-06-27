import EmailVerificationTemplate from "@/components/email/email-validation";
import { Resend } from "resend";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, serial } = await request.json();

    if (!email || !serial) {
      return Response.json(
        { error: "Valid Email & Serial Number are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Manufacture Dominique Renaud <no-reply@warranty.dominiquerenaud.com>",
      to: ["info@dominiquerenaud.com"],
      subject: "Une nouvelle demande de garantie a été enregistrée !",
      react: EmailVerificationTemplate({ email, serial }),
    });

    if (error) {
      console.error("Error sending email (brut):", error);
      return Response.json(
        { error: error?.message || "Sending Error", raw: error },
        { status: 500 }
      );
    }

    await prisma.demande.create({
      data: {
        email: email,
        serial: serial,
      },
    });

    return Response.json(data);
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        error: error?.message || "An internal error has occurred.",
        details: error,
      },
      { status: 500 }
    );
  }
}
