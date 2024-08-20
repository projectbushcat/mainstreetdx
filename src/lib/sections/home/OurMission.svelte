<script lang="ts">
  import Jelly from "$lib/ui/Jelly.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <h2>
    <span class="text-headline block text-main-gray">Our mission:</span>
    <span class="text-hero"
      >Help communities <span
        class="indent-[-100000px] inline-block align-middle w-[139px] h-[53px]"
        style="background-image:url(/decorations/thrive.svg)">thrive</span
      >
    </span>
  </h2>
  <div class="flex flex-col gap-2">
    <h3 class="text-headline">
      We acknowledge the delicate balance between preserving local culture and embracing digital
      change.
    </h3>
    <p class="text-subhead">
      Our methodology treats each business we serve as a vital component of an interconnected
      community landscape.
    </p>
  </div>
  <div slot="full-width">
    <div class="max-w-prose m-auto px-8">
      <h3 id="methodology" class="text-headline">How we achieve our mission:</h3>
    </div>
    <ul
      aria-labelledby="methodology"
      class="mx-auto mt-4 px-4 pb-4 grid justify-center grid-cols-1 gap-4 max-w-lg"
    >
      <Jelly bg="main-green" width="full" action="Assess for community impact">
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
      <Jelly bg="main-blue" width="full" action="Foster resilience with education">
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
      <Jelly bg="main-orange" width="full" action="Deploy responsibly & ethically">
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
    </ul>
  </div>
</Section>
