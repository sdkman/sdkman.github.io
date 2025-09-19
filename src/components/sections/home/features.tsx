import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { features } from '@/data/features';

function Features() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={`feature-${idx}`} className="link-highlight">
              <CardHeader>
                <div className="text-primary mb-6 flex size-12 items-center justify-center rounded-lg border p-2">
                  <feature.icon />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                <p
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Features };
