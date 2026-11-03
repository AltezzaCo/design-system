import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Stack } from '../parts';

export function TextareaDemo() {
  return (
    <div className="max-w-xl rounded-2xl border bg-card p-6 text-card-foreground">
      <Stack label="Respuesta">
        <div className="space-y-2">
          <Label htmlFor="textarea-reply">Mensaje al cliente</Label>
          <Textarea
            id="textarea-reply"
            rows={5}
            defaultValue="Hola, gracias por escribirnos. Tenemos disponibilidad esta semana."
          />
        </div>
        <Textarea placeholder="Campo deshabilitado" disabled />
        <Textarea placeholder="Revisa este mensaje" aria-invalid="true" />
      </Stack>
    </div>
  );
}