import { Button } from '../../components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet';
import { Row } from '../parts';

const SIDES = ['left', 'right', 'top', 'bottom'] as const;

export function SheetDemo() {
  return (
    <div className="rounded-2xl border bg-card p-6 text-card-foreground">
      <Row label="Lados">
        {SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline">
                {side === 'left'
                  ? 'Izquierda'
                  : side === 'right'
                    ? 'Derecha'
                    : side === 'top'
                      ? 'Arriba'
                      : 'Abajo'}
              </Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Contexto del cliente</SheetTitle>
                <SheetDescription>
                  Historial, notas y próximos pasos sin salir de la conversación.
                </SheetDescription>
              </SheetHeader>
              <div className="my-6 space-y-3 text-sm text-muted-foreground">
                <p>Último contacto: hace 2 minutos</p>
                <p>Oportunidad: cotización pendiente</p>
                <p>Responsable: Mariana</p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Listo</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </Row>
    </div>
  );
}