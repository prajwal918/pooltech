import { Shield, Award, Star, CheckCircle } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "BBB Accredited" },
  { icon: Star, label: "5-Star Rated" },
  { icon: CheckCircle, label: "Most Trusted" },
];

const TrustBadges = () => {
  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <badge.icon className="w-8 h-8 text-accent" />
              <span className="font-medium text-sm lg:text-base">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
