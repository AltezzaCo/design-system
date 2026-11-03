import { Input } from '../../components/ui/input';
import { Stack } from '../parts';

export function InputDemo() {
  return (
    <div className="max-w-md space-y-6 rounded-2xl border bg-card p-6">
      <Stack label="Tipos">
        <Input placeholder="Nombre" />
        <Input type="email" placeholder="nombre@empresa.com" />
        <Input type="file" />
      </Stack>
      <Stack label="Estados">
        <Input defaultValue="Solo lectura" readOnly />
        <Input placeholder="Deshabilitado" disabled />
        <Input placeholder="Dato inválido" aria-invalid="true" />
      </Stack>
    </div>
  );
}
