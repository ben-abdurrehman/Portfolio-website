import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CalStylingProps = {
  bgColor: string
}

export default function CalFloatingButton({bgColor} : CalStylingProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Button data-cal-namespace="30min"
    data-cal-link="benabdurrehman/30min"
    
    data-cal-config='{"layout":"month_view"}'
    className={cn(bgColor, bgColor === "bg-white" ? "text-black hover:bg-cyan-500 hover:text-white" : "text-white hover:bg-cyan-500")}
  >Book an appiontment</Button>;
};


