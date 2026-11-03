import { Guidelines } from './parts';

export function LogoPage() {
  const logoUrl = `${import.meta.env.BASE_URL}altezza-mark.svg`;

  return (
    <div className="space-y-6">
      <section className="grid overflow-hidden rounded-2xl border sm:grid-cols-2">
        <div className="flex min-h-72 items-center justify-center bg-background p-10">
          <div className="text-center">
            <img
              src={logoUrl}
              alt="Marca A de Altezza"
              className="mx-auto h-24 w-auto"
            />
            <p className="mt-5 text-xl font-bold tracking-[0.04em]">Altezza</p>
          </div>
        </div>
        <div className="dark flex min-h-72 items-center justify-center bg-[#060F0D] p-10 text-[#F3F7F5]">
          <div className="text-center">
            <img
              src={logoUrl}
              alt=""
              aria-hidden="true"
              className="mx-auto h-24 w-auto"
            />
            <p className="mt-5 text-xl font-bold tracking-[0.04em]">Altezza</p>
          </div>
        </div>
      </section>
      <section className="rounded-2xl border bg-card p-6">
        <Guidelines
          items={[
            {
              kind: 'do',
              text: 'Mantén aire suficiente alrededor de la marca y úsala completa en navegación o cierres.',
            },
            {
              kind: 'do',
              text: 'Prefiere la versión teal sobre superficies claras y la versión luminosa sobre fondos oscuros.',
            },
            {
              kind: 'dont',
              text: 'No deformes, redibujes ni conviertas la montaña en un adorno repetitivo.',
            },
          ]}
        />
      </section>
    </div>
  );
}