import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';

export function DialogDemo() {
  return (
    <div className="rounded-2xl border bg-card p-6 text-card-foreground">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Abrir confirmación</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¿Aprobar y enviar?</DialogTitle>
            <DialogDescription>
              La respuesta se enviará desde la cuenta conectada y quedará
              registrada en el hilo original.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Volver</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Aprobar respuesta</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}