import ThemeSwitcher from "./themeSelector";
import AutoLayout from "./autoLayout";
export default function TopBanner() {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <ThemeSwitcher />
        <AutoLayout />
      </div>
    </div>
  );
}
