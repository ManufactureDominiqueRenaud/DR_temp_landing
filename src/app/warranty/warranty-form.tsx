"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LucideLoader2, LucideX } from "lucide-react";

export default function WarrantyForm() {
  const formSchema = z.object({
    email: z.string().email("Please enter a valid email adress."),
    serialCode: z
      .string()
      .min(1, "Serial Number is required.")
      .min(5, "The Serial Number is at least 5 digits.")
      .max(5, "The Serial Number is 5 digits maximum."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      serialCode: "",
    },
  });
  const {
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/send-validation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          serial: values.serialCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An internal error occured.");
      }

      toast.custom((t) => (
        <div className="bg-[#252426] text-white p-4  border-2 border-white relative">
          <h1 className="text-[#AAEBBB]">Information sent!</h1>
          <p className="text-sm">
            Thank you for registering for the international warranty.
          </p>
          <p className="text-sm">
            You will receive a confirmation email at{" "}
            <span className="font-semibold">{values.email}</span> with the
            details of your request.
          </p>
          <p className="text-sm">
            Linked serial number :{" "}
            <span className="font-semibold">{values.serialCode}</span>
          </p>
          <button
            onClick={() => toast.dismiss(t)}
            className="absolute top-0 right-0 p-1 bg-white"
          >
            <LucideX className="w-4 h-4 text-[#252426]" />
          </button>
        </div>
      ));

      reset(); // <-- réinitialise les champs
    } catch (error: any) {
      console.error(
        "Form was not sended, there is an error :",
        JSON.stringify(error, null, 2)
      );

      if (error instanceof Error) {
        toast.error(`Error during sending : ${error.message}`);
      } else {
        toast.error("Unknown Error during sending.");
      }
    }
  }

  return (
    <div
      className={cn(
        "p-12",
        "w-[90svw] md:w-[75svw]",
        "bg-[#252426] text-[#AAEBBB]"
      )}
    >
      <h1 className="text-3xl font-serif">International Warranty</h1>
      <p>Welcome to the Dominique Renaud Manufacture.</p>
      <p className="font-semibold mt-6">Register your RENAUD TIXIER watch:</p>
      <p className="text-sm mt-2">
        Please enter your email address and the serial number found on your
        warranty card or on the back of your watch.
        <br />
        We will contact you personally to confirm the 3-year extension of your
        international warranty.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="md:flex space-y-8 md:space-y-0 gap-8 mt-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="abcd@email.com"
                      {...field}
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-white/30">
                    Please enter your email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serialCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Serial Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="XXXXX"
                      disabled={isSubmitting}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-white/30">
                    Please enter your watch’s serial number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="mt-4 mb-2">Thanks !</p>
          <Button
            type="submit"
            className="w-1/4 flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LucideLoader2 className="animate-spin h-4 w-4" />
                Submitting form...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
