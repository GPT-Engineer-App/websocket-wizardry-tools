import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  privacyMandatory: z.boolean().refine(value => value === true, {
    message: "You must accept the privacy policy"
  }),
  recaptcha: z.string().min(1, { message: "Please complete the reCAPTCHA" }),
});

const LeadGenerationForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} className="bg-gray-100" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} className="bg-gray-100" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="privacyMandatory" {...register('privacyMandatory')} />
        <Label htmlFor="privacyMandatory" className="text-sm">I accept the privacy policy and terms of service</Label>
      </div>
      {errors.privacyMandatory && <p className="text-red-500 text-sm">{errors.privacyMandatory.message}</p>}

      <Controller
        name="recaptcha"
        control={control}
        render={({ field }) => (
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={field.onChange}
          />
        )}
      />
      {errors.recaptcha && <p className="text-red-500 text-sm">{errors.recaptcha.message}</p>}

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe to Newsletter</Button>
    </form>
  );
};

export default LeadGenerationForm;
