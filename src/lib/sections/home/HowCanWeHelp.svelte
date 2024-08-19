<script lang="ts">
  import { Calendly30Min } from "$lib/data/MainStreet";
  import Jelly from "$lib/ui/Jelly.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <h2 class="text-hero">How can we help?</h2>
  <ul class="flex flex-col gap-8">
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Free community resources.</h3>
      <p class="text-body">
        We make entrepreneurship and technology accessible to more people with <a
          href={Calendly30Min}
        >
          free consultations
        </a>
        and <a href="#easy-street">resources</a>.
      </p>
    </li>
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Paid consulting services.</h3>
      <p class="text-body">
        We work backwards from a 90-day goal you want to achieve. This drives alignment at project
        kickoff and is an effective way to measure outcome.
      </p>
    </li>
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Our approach is simple: we meet you where you are.</h3>
      <p class="text-body">
        Our hands-on perspective spans two decades in marketing, startups and enterprise — giving
        your business a tactical advantage at every phase.
      </p>
    </li>
  </ul>
  <div slot="full-width">
    <div class="max-w-prose m-auto px-8">
      <h2 id="explore-expertise" class="text-headline">Explore our areas of expertise:</h2>
    </div>
    <ul
      class="mx-auto mt-4 px-4 pb-8 gap-4 justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-5xl"
      aria-labelledby="explore-expertise"
    >
      <Jelly bg="main-green" width="half" action="Ideate">
        <dl class="text-white">
          <dt class="text-label">Example goal:</dt>
          <dd class="text-body">Develop and refine core business concept.</dd>
          <dt class="text-label mt-4">Key concepts:</dt>
          <dd class="text-body">
            <ul class="list-inside list-disc">
              <li>Brainstorming techniques</li>
              <li>Market research basics</li>
              <li>Identifying pain points</li>
              <li>Crafting value propositions</li>
            </ul>
          </dd>
        </dl>
      </Jelly>
      <Jelly bg="main-yellow" width="half" action="Validate">
        <dl>
          <dt class="text-label">Example goal:</dt>
          <dd class="text-body">Develop and refine core business concept.</dd>
          <dt class="text-label mt-4">Key concepts:</dt>
          <dd class="text-body">
            <ul class="list-inside list-disc">
              <li>Brainstorming techniques</li>
              <li>Market research basics</li>
              <li>Identifying pain points</li>
              <li>Crafting value propositions</li>
            </ul>
          </dd>
        </dl>
      </Jelly>
      <Jelly bg="main-orange" width="half" action="Launch">
        <dl>
          <dt class="text-label">Example goal:</dt>
          <dd class="text-body">Develop and refine core business concept.</dd>
          <dt class="text-label mt-4">Key concepts:</dt>
          <dd class="text-body">
            <ul class="list-inside list-disc">
              <li>Brainstorming techniques</li>
              <li>Market research basics</li>
              <li>Identifying pain points</li>
              <li>Crafting value propositions</li>
            </ul>
          </dd>
        </dl>
      </Jelly>
      <Jelly bg="main-gray" width="half" action="Optimize">
        <dl class="text-white">
          <dt class="text-label">Example goal:</dt>
          <dd class="text-body">Develop and refine core business concept.</dd>
          <dt class="text-label mt-4">Key concepts:</dt>
          <dd class="text-body">
            <ul class="list-inside list-disc">
              <li>Brainstorming techniques</li>
              <li>Market research basics</li>
              <li>Identifying pain points</li>
              <li>Crafting value propositions</li>
            </ul>
          </dd>
        </dl>
      </Jelly>
      <Jelly bg="main-blue" width="half" action="Scale">
        <dl class="text-white">
          <dt class="text-label">Example goal:</dt>
          <dd class="text-body">Develop and refine core business concept.</dd>
          <dt class="text-label mt-4">Key concepts:</dt>
          <dd class="text-body">
            <ul class="list-inside list-disc">
              <li>Brainstorming techniques</li>
              <li>Market research basics</li>
              <li>Identifying pain points</li>
              <li>Crafting value propositions</li>
            </ul>
          </dd>
        </dl>
      </Jelly>
    </ul>
  </div>
</Section>
