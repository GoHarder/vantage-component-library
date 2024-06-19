<script>
  import { onMount } from 'svelte';
  import TimeLoop from '@vantage-js/time-loop';

  // Components
  import Section from './section.svelte';
  import { CircularProgress, LinearProgress } from '../../../../dist/progress';

  // Stores
  // Properties
  export let expand = false;
  export let debug = true;

  // Methods
  // Constants
  const cFrames = [{ time: 2000 }, { indeterminate: false, time: 2200 }, { value: 0.1, time: 2400 }, { value: 0.25, time: 10000 }, { value: 1, time: 20000 }, { time: -1 }];
  const lFrames = [
    { time: 2000 },
    { buffer: 0.1, indeterminate: false, time: 2200 },
    { buffer: 0.25, value: 0.1, time: 2400 },
    { buffer: 0.75, value: 0.25, time: 10000 },
    { buffer: 1, time: 19000 },
    { value: 1, time: 20000 },
    { time: -1 },
  ];

  const cUpdateFx = (time) => {
    const frame = cFrames.at(cUpdate);
    if (frame.time < 0) cStop = true;
    if (time >= frame.time && !cStop) cUpdate++;
  };

  const cRenderFx = () => {
    if (cUpdate !== cRender) {
      cRender = cUpdate;
      const frame = cFrames.at(cUpdate);

      if (frame.indeterminate !== undefined) {
        cI = frame.indeterminate;
      }

      if (frame.value !== undefined) {
        cV = frame.value;
      }
    }

    if (cStop) cLoop.stop();
  };

  const lUpdateFx = (time) => {
    const frame = lFrames.at(lUpdate);
    if (frame.time < 0) lStop = true;
    if (time >= frame.time && !lStop) lUpdate++;
  };

  const lRenderFx = () => {
    if (lUpdate !== lRender) {
      lRender = lUpdate;
      const frame = lFrames.at(lUpdate);

      if (frame.indeterminate !== undefined) {
        lI = frame.indeterminate;
      }

      if (frame.value !== undefined) {
        lV = frame.value;
      }

      if (frame.buffer !== undefined) {
        lB = frame.buffer;
      }
    }

    if (cStop) cLoop.stop();
  };

  const cLoop = new TimeLoop(30, cUpdateFx, cRenderFx);
  const lLoop = new TimeLoop(30, lUpdateFx, lRenderFx);

  // Variables

  let cStop = false;
  let cUpdate = 0;
  let cRender = 0;

  let lStop = false;
  let lUpdate = 0;
  let lRender = 0;

  let cI = true;
  let cV = 0;

  let lI = true;
  let lV = 0;
  let lB = 0;

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle

  onMount(() => {
    cLoop.start();
    lLoop.start();
  });
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Progress indicators</h2>
  <div slot="supporting-text">
    <p>Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.</p>
    <p>They communicate an app's state and indicate available actions, such as wether users can navigate away from the current screen.</p>
  </div>

  <div class="hero">
    <CircularProgress indeterminate={cI} value={cV} />
    <LinearProgress indeterminate={lI} visible value={lV} buffer={lB} class="full-width" />
  </div>
</Section>

<style>
  .hero {
    display: grid;
    gap: 12px;
    grid-template-columns: 48px 300px;
  }
</style>
