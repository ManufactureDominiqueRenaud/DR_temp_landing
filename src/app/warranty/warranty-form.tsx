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
import { LucideX } from "lucide-react";

export default function WarrantyForm() {
  const formSchema = z.object({
    email: z.string().email("Veuillez entrer une adresse e-mail valide."),
    serialCode: z
      .string()
      .min(1, "Le numéro de série est requis.")
      .min(5, "Le numéro de série doit comporter au moins 5 caractères.")
      .max(5, "Le numéro de série ne doit pas dépasser 5 caractères."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      serialCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(
      JSON.stringify(values) +
        "\n\nDéveloppement de l'envoi du mail à intégrer une fois les infos reçues !"
    );
    toast.custom((t) => (
      <div className="bg-[#252426] text-[#AAEBBB] p-4  border-2 border-white relative">
        <h1>Informations sent!</h1>
        <p className="text-xs text-white">We will contact you personally to confirm the extension of your international warranty.</p>
        <button onClick={() => toast.dismiss(t)} className="absolute top-0 right-0 p-1 bg-white">
          <LucideX className="w-4 h-4 text-[#252426]" />
        </button>
      </div>
    ));
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
        We will contact you personally to confirm the extension of your
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
                  <FormLabel>Numéro de série</FormLabel>
                  <FormControl>
                    <Input placeholder="XXXXX" {...field} className="w-full" />
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
          <Button type="submit" className="w-1/4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
