import { Bold, Italic, Sparkles } from 'lucide-react';
import { Toggle } from '../../components/ui/toggle';
import { Row } from '../parts';

export function ToggleDemo() {
  return (
    <div className="space-y-6 rounded-2xl border bg-card p-6 text-card-foreground">
      <Row label="Variantes">
        <Toggle aria-label="Activar negritas">
          <Bold /> Negritas
        </Toggle>
        <Toggle variant="outline" aria-label="Activar cursivas">
          <Italic /> Cursivas
        </Toggle>
        <Toggle defaultPressed aria-label="Activar sugerencia">
          <Sparkles /> Sugerencia IA
        </Toggle>
      </Row>
      <Row label="Tamaños">
        <Toggle size="sm" aria-label="Pequeño">
          <Bold />
        </Toggle>
        <Toggle size="default" aria-label="Normal">
          <Bold />
        </Toggle>
        <Toggle size="lg" aria-label="Grande">
          <Bold />
        </Toggle>
        <Toggle disabled>Deshabilitado</Toggle>
      </Row>
    </div>
  );
}