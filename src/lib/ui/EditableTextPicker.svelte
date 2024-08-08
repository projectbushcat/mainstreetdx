<script lang="ts">
  import SectionHeader from "./SectionHeader.svelte";

  export let value: string;
</script>

<SectionHeader header="What do you need to accomplish?" actionable standalone />
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<form method="dialog">
  <!-- We want to use autofocus in a modal dialog -->
  <!-- svelte-ignore a11y-autofocus -->
  <input type="radio" name="value" {value} autofocus id="selected" />
  <label for="selected" class="header">{value}</label>

  <input type="radio" name="value" value="Blah blah" id="id1" />
  <label for="id1" class="header">{value}</label>
  <input type="submit" />
</form>
