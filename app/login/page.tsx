import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../_components/ui/button";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-full">
      {/*esquerta */}
      <div className="flex h-full flex-col justify-center P-8 max-w-[550px] mx-auto">
        <Image
          src="logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="texr-4xl font-bold mb-3">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      {/*DIREITA*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faca login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;