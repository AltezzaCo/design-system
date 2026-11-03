import { ArrowRight, Loader2, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Row } from '../parts';

export function ButtonDemo() {
  return (
    <div className="space-y-6 rounded-2xl border bg-card p-6 text-card-foreground">
      <Row label="Variantes">
        <Button>Primario</Button>
        <Button variant="secondary">Secundario</Button>
        <Button variant="outline">Contorno</Button>
        <Button variant="ghost">Sutil</Button>
        <Button variant="link">Enlace</Button>
        <Button variant="destructive">Eliminar</Button>
      </Row>
      <Row label="Tamaños">
        <Button size="sm">Pequeño</Button>
        <Button size="default">Normal</Button>
        <Button size="lg">Grande</Button>
        <Button size="icon" aria-label="Correo">
          <Mail />
        </Button>
      </Row>
      <Row label="Con icono">
        <Button>
          <Mail /> Responder
        </Button>
        <Button variant="secondary">
          Continuar <ArrowRight />
        </Button>
      </Row>
      <Row label="Estados">
        <Button disabled>Deshabilitado</Button>
        <Button disabled>
          <Loader2 className="animate-spin" /> Enviando
        </Button>
      </Row>
    </div>
  );
}
