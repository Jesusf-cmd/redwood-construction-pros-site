interface ProcessStep {
  number: string | number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  heading?: string;
}

const ProcessSteps = ({ steps, heading = "Our Process" }: ProcessStepsProps) => (
  <section className="section-pad bg-secondary">
    <div className="mx-auto max-w-[1200px]">
      <h2 className="mb-10 text-3xl font-extrabold text-primary md:text-4xl">{heading}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={`${step.number}-${step.title}`} className="relative rounded-lg border border-border bg-background p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-black text-primary-foreground">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-border lg:block" aria-hidden="true" />
              )}
            </div>
            <h3 className="mb-3 text-xl font-extrabold text-primary">{step.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
