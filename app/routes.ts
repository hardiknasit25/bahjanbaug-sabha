import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("members", "routes/members.tsx"),
  route("events", "routes/events.tsx"),
  route("report", "routes/report.tsx"),

  // Nested route example (optional)
  //   route("routes/settings.tsx", {
  //     children: [
  //       route("routes/settings/profile.tsx"),
  //       route("routes/settings/security.tsx"),
  //     ],
  //   }),
] satisfies RouteConfig;
