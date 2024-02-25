import AssignPermission from '@/components/Authorization/Permissions/AssignPermission';
import FullLayout from '@/layouts/FullLayout';
import React from 'react'

export default function PermPage() {
  return (
    <div>
      <AssignPermission/>
    </div>
  )
}

PermPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
