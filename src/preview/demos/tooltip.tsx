import { Info } from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';

export function TooltipDemo() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Más información">
              <Info />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Ver contexto del cliente</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
