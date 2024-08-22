<script lang="ts">
  import { Calendly30Min, MainStreetEmailAddress } from "$lib/data/MainStreet";
  import Accordion from "$lib/ui/Accordion.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="main-yellow" name="hire-us">
  <h2 class="text-hero">Hire us to <em>do</em>.</h2>
  <div class="flex flex-col gap-2">
    <h3 class="text-headline">
      Outcome-driven professional services available per-project, accessible for every budget.
    </h3>
    <Accordion title={`Defining "Outcome"`} bg="main-yellow">
      <div class="flex flex-col gap-2">
        <h4 class="text-label">Main Street DX is optimized for speed, outcome — and trust.</h4>
        <p class="text-body">
          We excel at projects that can be accomplished in days and weeks, rather than months and
          years. Which means every day of work needs to be optimized to hit real milestones based on
          deep organizational alignment. That's a rarity, from our experience.
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-label">
          Our 90-day framework streamlines project definition while simultaneously driving
          organizational efficiency.
        </h4>
        <p class="text-body">
          We rarely expect to work with you for a full 90 days, rather, we recommend running
          projects with us this way to help you achieve your next milestone and see actual,
          measurable results.
        </p>
        <p class="text-body">
          Because this technique isn't just about defining an outcome for our specific engagement —
          it's about creating a roadmap for success for your business that, when repeated, creates a
          rhythm of continuous improvement:
        </p>
        <ol class="list-decimal list-inside text-body">
          <li><strong>Envision:</strong> Where do you want your business to be in 90 days?</li>
          <li><strong>Specify:</strong> What 3-5 key objectives will get you there?</li>
          <li><strong>Plan:</strong> Break each objective into weekly actionable tasks.</li>
          <li><strong>Execute:</strong> Commit to your plan, but stay flexible.</li>
          <li><strong>Review:</strong> At day 90, celebrate wins and learn from challenges.</li>
        </ol>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-label">
          Defining and committing to 90-day goals are how the most impactful entrepreneurs make
          growth sustainable.
        </h4>
        <p>
          Because of our focus on speed, we base each project's deliverables on maximizing your
          budget to achieve your next milestone. As Main Street's partner for community-led growth,
          we understand the need to limit investment in technology until there are tangible results.
          Which is why we work per-project: because we'd rather you get some benefit out of
          technology, than be priced out of getting <em>any</em> benefit.
        </p>
      </div>
    </Accordion>
  </div>
  <ul class="flex flex-col gap-8">
    <li>
      <h4 class="flex justify-between border-b-2 border-b-black mb-2">
        <span class="text-headline">Essentials</span>
        <span class="font-mono text-mono">$250/day</span>
      </h4>
      <p class="text-body">
        Accessible pricing to get your business up and running online, or update what's already
        there. <a href={Calendly30Min}>Schedule a free meeting</a>, we’d love to help.
      </p>
    </li>
    <li>
      <h4 class="flex justify-between border-b-2 border-b-black mb-2">
        <span class="text-headline">Professional</span>
        <span class="font-mono text-mono">Per-project</span>
      </h4>
      <p class="text-body">
        Outcome-driven per-project services for any kind of business and budget. <a
          href="mailto:{MainStreetEmailAddress}">Email us</a
        >
        or <a href={Calendly30Min}> book a call </a> to get started.
      </p>
    </li>
    <li>
      <h4 class="flex justify-between border-b-2 border-b-black mb-2">
        <span class="text-headline">Enterprise</span>
        <span class="font-mono text-mono">$150/hr</span>
      </h4>
      <p class="text-body">
        Dedicated weekly capacity for the most important deliveries. <a
          href="mailto:{MainStreetEmailAddress}">Email us</a
        >.
      </p>
    </li>
  </ul>
</Section>
