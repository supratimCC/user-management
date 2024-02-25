"use-client";

import List from "@/components/Authorization/Roles/List";
import FullLayout from "@/layouts/FullLayout";

export default function rolePage() {
  return (
    <div className="row">
      <List />
    </div>
  );
}

rolePage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
