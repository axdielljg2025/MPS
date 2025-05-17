---
icon: lucide:triangle-alert
badges:
  - value: Docus
    to: https://docus.dev/api/components#alert
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/components/content/Alert.vue
    target: _blank
---

## Usage

::stack
  :::div{.p-4}
    ::::alert{icon="lucide:info"}
    A **default** alert with `code` and a [link](/).
    ::::
  
    ::::alert{icon="lucide:info" type="secondary"}
    A **secondary** alert with `code` and a [link](/).
    ::::
  :::

```mdc
::alert{icon="lucide:info"}
  A **default** alert with `code` and a [link](/).
::

::alert{type="secondary" icon="lucide:info"}
  A **secondary** alert with `code` and a [link](/).
::
```
::

### Link

::stack
  :::div{.p-4}
    ::::alert
    ---
    icon: lucide:link
    target: _blank
    to: https://github.com/ZTL-UwU/shadcn-docs-nuxt
    ---
    A **link** alert.
    ::::
  :::

```mdc
::alert{to="https://github.com/ZTL-UwU/shadcn-docs-nuxt" target="_blank" icon="lucide:link"}
  A **link** alert.
::
```
::

### Variants

::tabs{variant="line"}
  :::stack{icon="lucide:info" label="info"}
    ::::div{.p-3}
      :::::alert{icon="lucide:info" type="info"}
      An **info** alert with `code` and a [link](/).
      :::::
    ::::
  
  ```mdc
  ::alert{type="info" icon="lucide:info"}
    An **info** alert with `code` and a [link](/).
  ::
  ```
  :::

  :::stack{icon="lucide:pencil" label="note"}
    ::::div{.p-3}
      :::::alert{icon="lucide:pencil" type="note"}
      A **note** alert with `code` and a [link](/).
      :::::
    ::::
  
  ```mdc
  ::alert{type="note" icon="lucide:pencil"}
    A **note** alert with `code` and a [link](/).
  ::
  ```
  :::

  :::stack{icon="lucide:lightbulb" label="success"}
    ::::div{.p-3}
      :::::alert{icon="lucide:lightbulb" type="success"}
      A **success** alert with `code` and a [link](/).
      :::::
    ::::
  
  ```mdc
  ::alert{type="success" icon="lucide:lightbulb"}
    A **success** alert with `code` and a [link](/).
  ::
  ```
  :::

  :::stack{icon="lucide:test-tube" label="example"}
    ::::div{.p-3}
      :::::alert{icon="lucide:test-tube" type="example"}
      An **example** alert with `code` and a [link](/).
      :::::
    ::::
  
  ```mdc
  ::alert{type="example" icon="lucide:test-tube"}
    An **example** alert with `code` and a [link](/).
  ::
  ```
  :::

  :::stack{icon="lucide:triangle-alert" label="warning"}
    ::::div{.p-3}
      :::::alert{icon="lucide:triangle-alert" type="warning"}
      A **warning** alert with `code` and a [link](/).
      :::::
    ::::
  
  ```mdc
  ::alert{type="warning" icon="lucide:triangle-alert"}
    A **warning** alert with `code` and a [link](/).
  ::
  ```
  :::

  :::stack{icon="lucide:circle-x" label="danger"}
    ::::div{.p-3}
      :::::alert{icon="lucide:circle-x" type="danger"}
      A **danger** alert with `code` and a [link](/).
      :::::
    ::::
  
  ```mdc
  ::alert{type="danger" icon="lucide:circle-x"}
    A **danger** alert with `code` and a [link](/).
  ::
  ```
  :::
::

### Title

::stack
  :::div{.p-4}
    ::::alert{icon="lucide:layout-list" title="Title"}
    An alert with a title.
    ::::
  :::

```mdc
::alert{title="Title" icon="lucide:layout-list"}
  An alert with a title.
::
```
::

## Props

::field-group
:field[Alert title]{name="title" type="string"}

 

:field[Alert icon]{name="icon" type="string"}

 

:field{default-value="'default'" name="type" type="'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'"}

 

:field[Link URL]{name="to" type="string"}

 

:field[A `target` attribute value to apply on the link]{name="target" type="Target"}

 

:field[Alias to `target='_blank'`]{name="external" type="boolean"}

 

:field[Whether to show the link indicator :icon{name="lucide:arrow-up-right"}]{default-value="true" name="showLinkIcon" type="boolean"}
::
