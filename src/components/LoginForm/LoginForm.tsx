import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { z } from "zod";
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

// Define a Zod schema for form validation
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(32, "Password must be at most 32 characters long."),
});

type FormData = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    console.log(data);
    // You can handle form submission here
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="underline text-right">
                  <a>Forgot Password?</a>
                </FormDescription>
                <FormMessage>{errors.password?.message}</FormMessage>
              </FormItem>
            )}
          />
          {/* <Button type="submit" className="w-full">
            Log In
          </Button> */}
          <Button className="w-full flex items-center">
            <div className="flex items-center">
              <EnvelopeClosedIcon className="h-5 w-5" />
              <div className="border-r border-gray-300 h-6 ml-2"></div>
            </div>
            <span className="flex-grow text-center font-normal">
              Login with Email
            </span>
          </Button>
        </form>
      </Form>
      <div className="text-muted-foreground mt-10 mb-10 before:content-['————————\00a0\00a0'] after:content-['\00a0\00a0\00a0————————']">
        or
      </div>

      <Button className="w-full flex items-center">
        <div className="flex items-center">
          <GitHubLogoIcon className="h-5 w-5" />
          <div className="border-r border-gray-300 h-6 ml-2"></div>
        </div>
        <span className="flex-grow text-center font-normal">
          Login with Github
        </span>
      </Button>
    </>
  );
};

export default LoginForm;
