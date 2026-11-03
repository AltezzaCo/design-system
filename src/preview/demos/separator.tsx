import { Separator } from '../../components/ui/separator';

export function SeparatorDemo() {
  return (
    <div className="max-w-md rounded-2xl border bg-card p-6">
      <div>
        <p className="font-medium">Conversación activa</p>
        <p className="text-sm text-muted-foreground">Contexto compartido por el equipo.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Cliente</span>
        <Separator orientation="vertical" />
        <span>Historial</span>
        <Separator orientation="vertical" />
        <span>Seguimiento</span>
      </div>
    </div>
  );
}
