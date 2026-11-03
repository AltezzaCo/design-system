import { Button } from '../../components/ui/button';
import { Toaster } from '../../components/ui/toaster';
import { toast } from '../../hooks/use-toast';
import { Row } from '../parts';

export function ToastDemo() {
  return (
    <div className="rounded-2xl border bg-card p-6 text-card-foreground">
      <Row label="Variantes">
        <Button
          onClick={() =>
            toast({
              title: 'Respuesta enviada',
              description: 'Gmail aceptó el mensaje y el hilo quedó actualizado.',
            })
          }
        >
          Mostrar confirmación
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast({
              variant: 'destructive',
              title: 'No se pudo enviar',
              description: 'Revisa la conexión antes de volver a intentarlo.',
            })
          }
        >
          Mostrar error
        </Button>
      </Row>
      <Toaster />
    </div>
  );
}