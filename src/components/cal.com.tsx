import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';

export default function CalFloatingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Button data-cal-namespace="30min"
    data-cal-link="benabdurrehman/30min"
    
    data-cal-config='{"layout":"month_view"}'
  >Book an appiontment</Button>;
};


