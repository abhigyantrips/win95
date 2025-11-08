const REGISTRY = [
  {
    name: "accordion",
    title: "Accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: [
      {
        path: "src/components/ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert",
    title: "Alert",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/alert.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog",
    title: "Alert dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: ["https://neobrutalism.dev/r/nbutton.json"],
    files: [
      {
        path: "src/components/ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar",
    title: "Avatar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-avatar"],
    files: [
      {
        path: "src/components/ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    title: "Badge",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb",
    title: "Breadcrumb",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "src/components/ui/breadcrumb.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "nbutton",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "src/components/ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    title: "Button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "src/components/ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "calendar",
    title: "Calendar",
    type: "registry:ui",
    dependencies: ["react-day-picker@8.10.1", "date-fns"],
    registryDependencies: ["https://neobrutalism.dev/r/nbutton.json"],
    files: [
      {
        path: "src/components/ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "ncard",
    title: "Card",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    title: "Card",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel",
    title: "Carousel",
    type: "registry:ui",
    dependencies: ["embla-carousel-react"],
    registryDependencies: ["https://neobrutalism.dev/r/nbutton.json"],
    files: [
      {
        path: "src/components/ui/carousel.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "chart",
    title: "Chart",
    type: "registry:ui",
    dependencies: ["recharts", "lucide-react"],
    registryDependencies: ["https://neobrutalism.dev/r/ncard.json"],
    files: [
      {
        path: "src/components/ui/chart.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox",
    title: "Checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "src/components/ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "collapsible",
    title: "Collapsible",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-collapsible"],
    files: [
      {
        path: "src/components/ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    title: "Command",
    type: "registry:ui",
    dependencies: ["cmdk"],
    registryDependencies: ["https://neobrutalism.dev/r/ndialog.json"],
    files: [
      {
        path: "src/components/ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "context-menu",
    title: "Context menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-context-menu"],
    files: [
      {
        path: "src/components/ui/context-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "ndialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "src/components/ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    title: "Dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "src/components/ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "drawer",
    title: "Drawer",
    type: "registry:ui",
    dependencies: ["vaul", "@radix-ui/react-dialog"],
    files: [
      {
        path: "src/components/ui/drawer.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown-menu",
    title: "Dropdown menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: [
      {
        path: "src/components/ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "form",
    title: "Form",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@hookform/resolvers",
      "zod",
      "react-hook-form",
    ],
    registryDependencies: [
      "https://neobrutalism.dev/r/nbutton.json",
      "https://neobrutalism.dev/r/nlabel.json",
    ],
    files: [
      {
        path: "src/components/ui/form.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "hover-card",
    title: "Hover card",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-hover-card"],
    files: [
      {
        path: "src/components/ui/hover-card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "image-card",
    title: "Image card",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/image-card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    title: "Input",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "ninput",
    title: "Input",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input-otp",
    title: "Input OTP",
    type: "registry:ui",
    dependencies: ["input-otp"],
    files: [
      {
        path: "src/components/ui/input-otp.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "nlabel",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "src/components/ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "label",
    title: "Label",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "src/components/ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "marquee",
    title: "Marquee",
    docs: "Make sure there is enough content in `items` so it loops perfectly. Visit https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind to learn more.",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/marquee.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "menubar",
    title: "Menubar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-menubar"],
    files: [
      {
        path: "src/components/ui/menubar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "navigation-menu",
    title: "Navigation menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: [
      {
        path: "src/components/ui/navigation-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pagination",
    title: "Pagination",
    type: "registry:ui",
    registryDependencies: ["https://neobrutalism.dev/r/nbutton.json"],
    files: [
      {
        path: "src/components/ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "popover",
    title: "Popover",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-popover"],
    files: [
      {
        path: "src/components/ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "progress",
    title: "Progress",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: [
      {
        path: "src/components/ui/progress.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "radio-group",
    title: "Radio group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group"],
    files: [
      {
        path: "src/components/ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "resizable",
    title: "Resizable",
    type: "registry:ui",
    dependencies: ["react-resizable-panels"],
    files: [
      {
        path: "src/components/ui/resizable.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scroll-area",
    title: "Scroll area",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: [
      {
        path: "src/components/ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "select",
    title: "Select",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-select"],
    files: [
      {
        path: "src/components/ui/select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sheet",
    title: "Sheet",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "src/components/ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "nsheet",
    title: "Sheet",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "src/components/ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sidebar",
    title: "Sidebar",
    type: "registry:ui",
    registryDependencies: [
      "https://neobrutalism.dev/r/nbutton.json",
      "https://neobrutalism.dev/r/nsheet.json",
      "https://neobrutalism.dev/r/ntooltip.json",
      "https://neobrutalism.dev/r/ninput.json",
      "https://neobrutalism.dev/r/nskeleton.json",
    ],
    files: [
      {
        path: "src/components/ui/sidebar.tsx",
        type: "registry:ui",
      },
      {
        path: "src/hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "skeleton",
    title: "Skeleton",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "nskeleton",
    title: "Skeleton",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "slider",
    title: "Slider",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slider"],
    files: [
      {
        path: "src/components/ui/slider.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sonner",
    title: "Sonner",
    type: "registry:ui",
    dependencies: ["sonner", "next-themes"],
    files: [
      {
        path: "src/components/ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "switch",
    title: "Switch",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-switch"],
    files: [
      {
        path: "src/components/ui/switch.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "table",
    title: "Table",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/table.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    title: "Tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: [
      {
        path: "src/components/ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "textarea",
    title: "Textarea",
    type: "registry:ui",
    files: [
      {
        path: "src/components/ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tooltip",
    title: "Tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        path: "src/components/ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "ntooltip",
    title: "Tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        path: "src/components/ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
  },
]

export default REGISTRY