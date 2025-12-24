export default defineAppConfig({
  ui: {
    input: {
      slots: {
        root: "relative inline-flex items-center",
        base: [
          "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
          "transition-colors",
        ],
        leading: "absolute inset-y-0 start-0 flex items-center",
        leadingIcon: "shrink-0 text-dimmed",
        leadingAvatar: "shrink-0",
        leadingAvatarSize: "",
        trailing: "absolute inset-y-0 end-0 flex items-center",
        trailingIcon: "shrink-0 text-dimmed",
      },
      variants: {
        fieldGroup: {
          horizontal: {
            root: "group has-focus-visible:z-1",
            base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none",
          },
          vertical: {
            root: "group ",
            base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none",
          },
        },
        size: {
          xs: {
            base: "px-2 py-1 text-xs gap-1",
            leading: "ps-2",
            trailing: "pe-2",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-4",
          },
          sm: {
            base: "px-2.5 py-1.5 text-xs gap-1.5",
            leading: "ps-2.5",
            trailing: "pe-2.5",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-4",
          },
          md: {
            base: "px-2.5 py-1.5 text-sm gap-1.5",
            leading: "ps-2.5",
            trailing: "pe-2.5",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
            trailingIcon: "size-5",
          },
          lg: {
            base: "px-3 py-2 text-sm gap-2",
            leading: "ps-3",
            trailing: "pe-3",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
            trailingIcon: "size-5",
          },
          xl: {
            base: "px-3 py-2 text-base gap-2",
            leading: "ps-3",
            trailing: "pe-3",
            leadingIcon: "size-6",
            leadingAvatarSize: "xs",
            trailingIcon: "size-6",
          },
        },
        variant: {
          myVar:
            "  text-black text-sm md:text-lg font-semibold placeholder:text-sm  md:placeholder:text-lg ",
          outline: "text-highlighted bg-default ring ring-inset ring-accented",
          soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
          subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
          ghost:
            "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
          none: "text-highlighted bg-transparent",
        },
        color: {
          primary: "",
          secondary: "",
          success: "",
          info: "",
          warning: "",
          error: "",
          neutral: "",
        },
        leading: {
          true: "",
        },
        trailing: {
          true: "",
        },
        loading: {
          true: "",
        },
        highlight: {
          true: "",
        },
        type: {
          file: "file:me-1.5 file:font-medium file:text-muted file:outline-none",
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: ["outline", "subtle"],
          class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
        },
        {
          color: "primary",
          highlight: true,
          class: "ring ring-inset ring-primary",
        },
        {
          color: "neutral",
          variant: ["outline", "subtle"],
          class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted",
        },
        {
          color: "neutral",
          highlight: true,
          class: "ring ring-inset ring-inverted",
        },
        {
          leading: true,
          size: "xs",
          class: "ps-7",
        },
        {
          leading: true,
          size: "sm",
          class: "ps-8",
        },
        {
          leading: true,
          size: "md",
          class: "ps-9",
        },
        {
          leading: true,
          size: "lg",
          class: "ps-10",
        },
        {
          leading: true,
          size: "xl",
          class: "ps-11",
        },
        {
          trailing: true,
          size: "xs",
          class: "pe-7",
        },
        {
          trailing: true,
          size: "sm",
          class: "pe-8",
        },
        {
          trailing: true,
          size: "md",
          class: "pe-9",
        },
        {
          trailing: true,
          size: "lg",
          class: "pe-10",
        },
        {
          trailing: true,
          size: "xl",
          class: "pe-11",
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: "animate-spin",
          },
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: "animate-spin",
          },
        },
      ],
      defaultVariants: {
        size: "md",
        color: "primary",
        variant: "outline",
      },
    },
    tabs: {
      slots: {
        root: "flex items-center gap-2",
        list: "relative flex p-1 group",
        indicator: "absolute transition-[translate,width] duration-200",
        trigger: [
          "group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75",
          "transition-colors",
        ],
        leadingIcon: "shrink-0",
        leadingAvatar: "shrink-0",
        leadingAvatarSize: "",
        label: "truncate",
        trailingBadge: "shrink-0",
        trailingBadgeSize: "sm",
        content: "focus:outline-none w-full",
      },
      variants: {
        color: {
          primary: "",
          secondary: "",
          success: "",
          info: "",
          warning: "",
          error: "",
          neutral: "",
        },
        variant: {
          pill: {
            list: "bg-elevated rounded-lg",
            trigger: "grow",
            indicator: "rounded-md shadow-xs",
          },
          link: {
            list: "border-default",
            indicator: "rounded-full",
            trigger: "focus:outline-none",
          },
        },
        orientation: {
          horizontal: {
            root: "flex-col",
            list: "w-full",
            indicator:
              "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
            trigger: "justify-center",
          },
          vertical: {
            list: "flex-col",
            indicator:
              "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)",
          },
        },
        size: {
          xs: {
            trigger: "px-2 py-1 text-xs gap-1",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
          },
          sm: {
            trigger: "px-2.5 py-1.5 text-xs gap-1.5",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
          },
          md: {
            trigger: "px-3 py-1.5 text-sm gap-1.5",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
          },
          lg: {
            trigger: "px-3 py-2 text-sm gap-2",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
          },
          xl: {
            trigger: "px-3 py-2 text-base gap-2",
            leadingIcon: "size-6",
            leadingAvatarSize: "xs",
          },
        },
      },
      compoundVariants: [
        {
          orientation: "horizontal",
          variant: "pill",
          class: {
            indicator: "inset-y-1",
          },
        },
        {
          orientation: "horizontal",
          variant: "link",
          class: {
            list: "border-b -mb-px",
            indicator: "-bottom-px h-px",
          },
        },
        {
          orientation: "vertical",
          variant: "pill",
          class: {
            indicator: "inset-x-1",
            list: "items-center",
          },
        },
        {
          orientation: "vertical",
          variant: "link",
          class: {
            list: "border-s -ms-px",
            indicator: "-start-px w-px",
          },
        },
        {
          color: "primary",
          variant: "pill",
          class: {
            indicator: "bg-primary",
            trigger:
              "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          },
        },
        {
          color: "neutral",
          variant: "pill",
          class: {
            indicator: "bg-inverted",
            trigger:
              "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted",
          },
        },
        {
          color: "primary",
          variant: "link",
          class: {
            indicator: "bg-primary",
            trigger:
              "data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
          },
        },
        {
          color: "neutral",
          variant: "link",
          class: {
            indicator: "bg-inverted",
            trigger:
              "data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted",
          },
        },
      ],
      defaultVariants: {
        color: "primary",
        variant: "pill",
        size: "md",
      },
    },
    card: {
      slots: {
        root: "rounded-lg overflow-hidden",
        header: "p-4 sm:px-6  ",
        body: "p-4 sm:p-6",
        footer: "p-4 sm:px-6",
      },
      variants: {
        variant: {
          solid: {
            root: "bg-inverted text-inverted",
          },
          outline: {
            root: "bg-default ring ring-default divide-y divide-default",
          },
          soft: {
            root: "bg-elevated/50 divide-y divide-default",
          },
          subtle: {
            root: "bg-elevated/50 ring ring-default divide-y divide-default",
          },
          myVar: {
            root: "p-0 flex w-full border border-white/20",
          },
        },
      },
      defaultVariants: {
        variant: "outline",
      },
    },
  },
});
