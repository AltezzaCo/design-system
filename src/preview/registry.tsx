import { lazy, type ComponentType } from 'react';
import { ColorsPage, FontsPage, LayoutPage, OverviewPage } from './foundations';

function lazyPage(load: () => Promise<ComponentType>) {
  return lazy(async () => ({ default: await load() }));
}

const LogoPage = lazyPage(() =>
  import('./brand').then(({ LogoPage }) => LogoPage),
);
const ButtonDemo = lazyPage(() =>
  import('./demos/button').then(({ ButtonDemo }) => ButtonDemo),
);
const InputDemo = lazyPage(() =>
  import('./demos/input').then(({ InputDemo }) => InputDemo),
);
const LabelDemo = lazyPage(() =>
  import('./demos/label').then(({ LabelDemo }) => LabelDemo),
);
const SeparatorDemo = lazyPage(() =>
  import('./demos/separator').then(({ SeparatorDemo }) => SeparatorDemo),
);
const TooltipDemo = lazyPage(() =>
  import('./demos/tooltip').then(({ TooltipDemo }) => TooltipDemo),
);
const CardDemo = lazyPage(() =>
  import('./demos/card').then(({ CardDemo }) => CardDemo),
);
const DialogDemo = lazyPage(() =>
  import('./demos/dialog').then(({ DialogDemo }) => DialogDemo),
);
const SheetDemo = lazyPage(() =>
  import('./demos/sheet').then(({ SheetDemo }) => SheetDemo),
);
const ToastDemo = lazyPage(() =>
  import('./demos/toast').then(({ ToastDemo }) => ToastDemo),
);
const TextareaDemo = lazyPage(() =>
  import('./demos/textarea').then(({ TextareaDemo }) => TextareaDemo),
);
const SkeletonDemo = lazyPage(() =>
  import('./demos/skeleton').then(({ SkeletonDemo }) => SkeletonDemo),
);
const ToggleDemo = lazyPage(() =>
  import('./demos/toggle').then(({ ToggleDemo }) => ToggleDemo),
);

export type PreviewEntry = {
  id: string;
  name: string;
  description: string;
  Page: ComponentType;
};

export type NavGroup = {
  name: string;
  entries: PreviewEntry[];
};

export const DESIGN_SYSTEM = {
  title: 'Altezza Design System',
  description:
    'Una base visual premium y operativa para centralizar conversaciones, responder con contexto y no perder oportunidades.',
} as const;

export const OVERVIEW_ENTRY: PreviewEntry = {
  id: 'overview',
  name: 'Vista general',
  description: 'Identidad, principios y componentes del sistema Altezza.',
  Page: OverviewPage,
};

export const NAV_GROUPS: NavGroup[] = [
  {
    name: 'Marca',
    entries: [
      {
        id: 'brand-logo',
        name: 'Logotipo',
        description: 'Marca de montaña y reglas esenciales de uso.',
        Page: LogoPage,
      },
    ],
  },
  {
    name: 'Colores',
    entries: [
      {
        id: 'color-roles',
        name: 'Roles de color',
        description: 'Marca, superficies, señales y estados semánticos.',
        Page: ColorsPage,
      },
    ],
  },
  {
    name: 'Tipografía',
    entries: [
      {
        id: 'type-scale',
        name: 'Escala tipográfica',
        description: 'Inter para mensajes claros y operación densa.',
        Page: FontsPage,
      },
    ],
  },
  {
    name: 'Composición',
    entries: [
      {
        id: 'spacing-radius',
        name: 'Espaciado y radios',
        description: 'Ritmo de 4px y radios calmados para superficies operativas.',
        Page: LayoutPage,
      },
    ],
  },
  {
    name: 'Acciones',
    entries: [
      {
        id: 'button',
        name: 'Botones',
        description: 'Jerarquías de acción, tamaños, iconos y estados.',
        Page: ButtonDemo,
      },
      {
        id: 'toggle',
        name: 'Toggles',
        description: 'Controles presionables, tamaños y estados.',
        Page: ToggleDemo,
      },
    ],
  },
  {
    name: 'Formularios',
    entries: [
      {
        id: 'input',
        name: 'Campos de texto',
        description: 'Captura de datos, validación y estados.',
        Page: InputDemo,
      },
      {
        id: 'label',
        name: 'Etiquetas',
        description: 'Etiquetas accesibles para controles y formularios.',
        Page: LabelDemo,
      },
      {
        id: 'textarea',
        name: 'Áreas de texto',
        description: 'Redacción de respuestas, validación y estados.',
        Page: TextareaDemo,
      },
    ],
  },
  {
    name: 'Estructura',
    entries: [
      {
        id: 'separator',
        name: 'Separadores',
        description: 'Divisiones sutiles entre áreas de información.',
        Page: SeparatorDemo,
      },
      {
        id: 'card',
        name: 'Tarjetas',
        description: 'Superficies para métricas, contexto y acciones relacionadas.',
        Page: CardDemo,
      },
    ],
  },
  {
    name: 'Ayuda contextual',
    entries: [
      {
        id: 'tooltip',
        name: 'Tooltips',
        description: 'Ayuda breve y accesible sin interrumpir el flujo.',
        Page: TooltipDemo,
      },
    ],
  },
  {
    name: 'Capas',
    entries: [
      {
        id: 'dialog',
        name: 'Diálogos',
        description: 'Confirmaciones enfocadas con bloqueo del fondo.',
        Page: DialogDemo,
      },
      {
        id: 'sheet',
        name: 'Paneles laterales',
        description: 'Contexto secundario desde cualquier borde.',
        Page: SheetDemo,
      },
    ],
  },
  {
    name: 'Retroalimentación',
    entries: [
      {
        id: 'toast',
        name: 'Notificaciones',
        description: 'Confirmación, error, cierre y cola de mensajes.',
        Page: ToastDemo,
      },
      {
        id: 'skeleton',
        name: 'Carga',
        description: 'Estados de carga que preservan la estructura.',
        Page: SkeletonDemo,
      },
    ],
  },
];

export const ALL_ENTRIES: PreviewEntry[] = [
  OVERVIEW_ENTRY,
  ...NAV_GROUPS.flatMap((group) => group.entries),
];

const duplicateIds = ALL_ENTRIES.map((entry) => entry.id).filter(
  (id, index, ids) => ids.indexOf(id) !== index,
);

if (duplicateIds.length > 0) {
  throw new Error(
    `Duplicate preview page id(s): ${[...new Set(duplicateIds)].join(', ')}`,
  );
}