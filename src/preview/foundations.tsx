import { Info, Send, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';
import { Guidelines } from './parts';

const CORE_SWATCHES = [
  { name: 'Primary · Acción', className: 'bg-primary text-primary-foreground' },
  {
    name: 'Secondary · Superficie',
    className: 'bg-secondary text-secondary-foreground',
  },
  { name: 'Accent · Oportunidad', className: 'bg-accent text-accent-foreground' },
] as const;

const SUPPORTING_SWATCHES = [
  { name: 'Background', className: 'border bg-background text-foreground' },
  { name: 'Card', className: 'border bg-card text-card-foreground' },
  { name: 'Muted', className: 'bg-muted text-muted-foreground' },
  {
    name: 'Destructive',
    className: 'bg-destructive text-destructive-foreground',
  },
  { name: 'Sidebar', className: 'bg-sidebar text-sidebar-foreground' },
] as const;

const TYPE_SCALE = [
  { label: 'Display', className: 'text-5xl font-extrabold tracking-[-0.045em]' },
  { label: 'Heading', className: 'text-2xl font-semibold tracking-tight' },
  { label: 'Body', className: 'text-base leading-7' },
  { label: 'Label', className: 'text-sm font-semibold' },
  {
    label: 'Caption',
    className: 'text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground',
  },
] as const;

const SPACING_SCALE = [
  { label: '4', className: 'w-4' },
  { label: '8', className: 'w-8' },
  { label: '12', className: 'w-12' },
  { label: '16', className: 'w-16' },
  { label: '24', className: 'w-24' },
] as const;

function Swatch({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <div className={`flex min-h-28 items-end rounded-xl border p-4 ${className}`}>
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
}

export function OverviewPage() {
  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Bandeja unificada · Operación clara
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              Cada conversación avanza con contexto.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              El sistema convierte ruido en prioridades visibles, respuestas
              revisables y seguimiento compartido por todo el equipo.
            </p>
          </div>
          <div className="rounded-xl border bg-muted/50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />
              Sugerencia lista para revisar
            </div>
            <Separator className="my-4" />
            <p className="text-sm leading-6 text-muted-foreground">
              “Hola María, tenemos disponibilidad el martes. ¿Qué horario te
              funciona mejor?”
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {CORE_SWATCHES.map((swatch) => (
          <Swatch key={swatch.name} {...swatch} />
        ))}
      </section>

      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Catálogo de componentes
            </p>
            <h2 className="mt-2 text-xl font-semibold">Responder con claridad</h2>
          </div>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            12 familias
          </span>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-2">
            <Label htmlFor="pilot-reply">Respuesta al cliente</Label>
            <Input
              id="pilot-reply"
              defaultValue="Claro, puedo ayudarte con tu solicitud."
            />
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Ver contexto">
                    <Info />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Revisar contexto del cliente</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button>
              Aprobar y enviar <Send />
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="font-semibold">Principios de composición</h2>
        </div>
        <div className="mt-4">
          <Guidelines
            items={[
              {
                kind: 'do',
                text: 'Usa teal para acciones y estados activos; deja que la conversación sea el contenido principal.',
              },
              {
                kind: 'do',
                text: 'Reserva la lima para éxito, oportunidad o una llamada a la acción decisiva.',
              },
              {
                kind: 'dont',
                text: 'No llenes cada tarjeta de brillo, gradientes o señales que compitan entre sí.',
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <div>
          <h2 className="font-semibold">Paleta central</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Acción, profundidad operativa y señal de oportunidad.
          </p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {CORE_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Superficies y semántica</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SUPPORTING_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-6">
        <Guidelines
          items={[
            {
              kind: 'do',
              text: 'Construye profundidad con superficies verde petróleo separadas por bordes finos.',
            },
            {
              kind: 'do',
              text: 'Usa el fondo obsidiana en marketing y autenticación para mantener la identidad premium.',
            },
            {
              kind: 'dont',
              text: 'No uses la lima como color decorativo repetido; debe conservar significado.',
            },
          ]}
        />
      </section>
    </div>
  );
}

export function FontsPage() {
  return (
    <div className="space-y-6 rounded-2xl border bg-card p-6 text-card-foreground">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Inter
        </p>
        <p className="mt-4 max-w-3xl text-5xl font-extrabold tracking-[-0.045em]">
          Conversaciones claras. Oportunidades visibles.
        </p>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          Una sola familia tipográfica mantiene continuidad entre marketing,
          formularios y operación diaria.
        </p>
      </section>
      <Separator />
      <section className="space-y-5">
        {TYPE_SCALE.map((entry) => (
          <div key={entry.label} className="grid gap-2 sm:grid-cols-[100px_1fr]">
            <span className="pt-1 text-xs font-medium text-muted-foreground">
              {entry.label}
            </span>
            <p className={entry.className}>Responder mejor, sin perder contexto.</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export function LayoutPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Ritmo de espaciado</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Una base de 4px permite densidad sin perder respiración.
        </p>
        <div className="mt-6 space-y-4">
          {SPACING_SCALE.map((space) => (
            <div key={space.label} className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">
                {space.label}
              </span>
              <div className={`h-3 rounded-full bg-primary ${space.className}`} />
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Radios</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          El radio base de 10px suaviza la interfaz sin volverla informal.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            { label: 'Small', className: 'rounded-sm' },
            { label: 'Medium', className: 'rounded-md' },
            { label: 'Large', className: 'rounded-lg' },
            { label: 'Extra large', className: 'rounded-xl' },
          ].map((radius) => (
            <div
              key={radius.label}
              className={`flex h-24 items-end border bg-muted p-3 ${radius.className}`}
            >
              <span className="text-xs font-medium">{radius.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}