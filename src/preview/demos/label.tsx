import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export function LabelDemo() {
  return (
    <div className="max-w-md space-y-6 rounded-2xl border bg-card p-6 text-card-foreground">
      <div className="space-y-2">
        <Label htmlFor="label-email">Correo del cliente</Label>
        <Input id="label-email" type="email" placeholder="cliente@empresa.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="label-disabled">Espacio de trabajo</Label>
        <Input id="label-disabled" value="Altezza Inbox" disabled readOnly />
      </div>
    </div>
  );
}