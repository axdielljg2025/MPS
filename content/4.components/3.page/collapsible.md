---
title: Collapsible
icon: lucide:list-collapse
badges:
  - value: Nuxt UI Pro
    to: https://ui.nuxt.com/pro/prose/collapsible
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Collapsible.vue
    target: _blank
  - value: 0.5.8
---

## Usage

### Simple

::stack
  :::div{.p-4.md:p-6}
    ::::collapsible
    #title
    Show properties
    
    #content
    This is a **Simple** style collapsible.
    ::::
  :::

```mdc
::collapsible
#title
Show properties

#content
This is a **Simple** style collapsible.
::
```
::

### Card

::stack
  :::div{.p-4.md:p-6}
    ::::collapsible{title="@peduarte starred 3 repositories" variant="card"}
    @radix-ui/primitives
    ::::
  :::

```mdc
::collapsible{variant="card" title="@peduarte starred 3 repositories"}
@radix-ui/primitives
::
```
::

## Props

::field-group
:field{default-value="'simple'" name="variant" type="'simple' | 'card'"}

 

:field[Collapsible title]{name="title" type="string"}

 

:field{default-value="false" name="defaultOpen" type="boolean"}
::
