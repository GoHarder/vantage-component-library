<script lang="ts">
  import '@material/web/icon/icon.js';

  // MARK: Types
  // ------------------------------------------------
  
  type Props = {
    /** The default slot content. */
    children: Function;
    [key: string]: any;
  }

  // MARK: Properties
  // ------------------------------------------------

  let { children, ...props }: Props = $props();
</script>

<md-icon {...props}>
  {@render children()} 
</md-icon>
