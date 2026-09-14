import { OrbitCardStack } from "./OrbitCardStack";
// import { useState } from "react";
import { projects } from "../../constants/const";

export default function CardPreview() {
  // const [activeMember, setActiveMember] = useState(projects[2]!);

  return (
    <section className="space-y-6">
      <div className="h-[750px] w-full">
        <OrbitCardStack
          items={projects}
          defaultActiveIndex={2}
          spread={150}
          lift={40}
          // onActiveChange={(item) => setActiveMember(item)}
        />
      </div>

      {/* <div className="absolute top-0 mt-5">
        <p className="text-sm font-medium text-muted-foreground">Pick</p>
        <h2 className="text-2xl font-semibold">{activeMember.name}</h2>
      </div> */}
    </section>
  );
}
