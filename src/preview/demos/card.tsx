import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

export function CardDemo() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <CardTitle>Conversaciones pendientes</CardTitle>
          <CardDescription>
            Mensajes que todavía requieren una respuesta del equipo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold tracking-tight">12</p>
          <p className="mt-2 text-sm text-accent">3 necesitan respuesta hoy</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Abrir bandeja <ArrowUpRight />
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-primary/25 bg-primary/5">
        <CardHeader>
          <CardTitle>Oportunidad detectada</CardTitle>
          <CardDescription>
            El cliente preguntó por disponibilidad y precio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            Lead caliente
          </span>
        </CardContent>
        <CardFooter className="gap-2">
          <Button>Responder</Button>
          <Button variant="ghost">Asignar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}