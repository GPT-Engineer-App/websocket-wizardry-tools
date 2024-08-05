import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const phoneRegex = /^\+\d{1,4}\s?\d{6,14}$/;

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  surname: z.string().min(2, { message: "Surname must be at least 2 characters" }),
  phone: z.string().regex(phoneRegex, { message: "Invalid phone number" }),
  email: z.string().email().refine(email => email.endsWith('@gmail.com'), {
    message: "Only gmail.com addresses are allowed"
  }),
  privacyMandatory: z.boolean().refine(value => value === true, {
    message: "You must accept the mandatory privacy policy"
  }),
  privacyMarketing: z.boolean(),
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
        <Input id="name" {...register('name')} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="surname">Surname</Label>
        <Input id="surname" {...register('surname')} />
        {errors.surname && <p className="text-red-500">{errors.surname.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <div className="flex">
          <Select onValueChange={(value) => register('phonePrefix').onChange(value)} defaultValue="+1">
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Prefix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+1">+1</SelectItem>
              <SelectItem value="+44">+44</SelectItem>
              <SelectItem value="+91">+91</SelectItem>
              {/* Add more country codes as needed */}
            </SelectContent>
          </Select>
          <Input id="phone" {...register('phone')} className="flex-1 ml-2" />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="privacyMandatory" {...register('privacyMandatory')} />
        <Label htmlFor="privacyMandatory">I accept the mandatory privacy policy</Label>
      </div>
      {errors.privacyMandatory && <p className="text-red-500">{errors.privacyMandatory.message}</p>}

      <div className="flex items-center space-x-2">
        <Checkbox id="privacyMarketing" {...register('privacyMarketing')} />
        <Label htmlFor="privacyMarketing">I accept to receive marketing communications</Label>
      </div>

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
      {errors.recaptcha && <p className="text-red-500">{errors.recaptcha.message}</p>}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LeadGenerationForm;
