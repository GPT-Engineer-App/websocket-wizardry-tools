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
  email: z.string().email({ message: "Invalid email address" }),
  favoriteTeam: z.string().min(1, { message: "Please select your favorite team" }),
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

      <div>
        <Label htmlFor="favoriteTeam">Favorite F1 Team</Label>
        <Select onValueChange={(value) => register('favoriteTeam').onChange(value)}>
          <SelectTrigger className="w-full bg-gray-100">
            <SelectValue placeholder="Select your favorite team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mercedes">Mercedes</SelectItem>
            <SelectItem value="red_bull">Red Bull Racing</SelectItem>
            <SelectItem value="ferrari">Ferrari</SelectItem>
            <SelectItem value="mclaren">McLaren</SelectItem>
            <SelectItem value="aston_martin">Aston Martin</SelectItem>
            {/* Add more teams as needed */}
          </SelectContent>
        </Select>
        {errors.favoriteTeam && <p className="text-red-500 text-sm">{errors.favoriteTeam.message}</p>}
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

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Join the F1 Fan Club</Button>
    </form>
  );
};

export default LeadGenerationForm;
