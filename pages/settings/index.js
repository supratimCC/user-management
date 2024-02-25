import FullLayout from "@/layouts/FullLayout";
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Card,
  CardSubtitle,
} from "reactstrap";
import Image from "next/image";
import simg from "@/assets/images/background/icons2.jpg";
import Link from "next/link";
import Loader from "@/components/Common/Loader";

export default function SettingsPage() {
  const [state, setstate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setstate(false);
    }, 2000);
  }, []);
  const features = [
    {
      title: "Change App settings",
      desc: "This provides you with the flexibility to customize and fine-tune your app's behavior to suit your preferences and needs. Within this menu, you can access a range of configuration options to personalize your app experience. ",
      icon: "bi-vinyl",
      href: "settings/app-setings/",
    },
    {
      title: "Authentication Settings",
      desc: "This offers you comprehensive control over the way you access and secure your account within the app. With this menu, you can fine-tune and adjust your authentication preferences to enhance the security and convenience of your experience.",
      icon: "bi-lock",
      href: "settings/auth-settings/",
    },
    {
      title: "CASL",
      desc: "It is isomorphic authorization JavaScript library which restricts what resources a given client is allowed to access.",
      icon: "bi-umbrella",
      href: "app-setings/",
    },
    {
      title: "Dark & Light Layouts",
      desc: "This theme comes with built-in light & dark layouts, select as per your preference.",
      icon: "bi-brightness-high",
      href: "app-setings/",
    },
    {
      title: "Built-in Customizer",
      desc: "Built-in customizer enables users to change their admin panel look & feel based on their preferences.",
      icon: "bi-gear",
      href: "app-setings/",
    },
    {
      title: "Well Crafted Apps",
      desc: "Creative & smart well crafted apps like email, chat, todo & calender allows you to create your apps faster.",
      icon: "bi-star",
      href: "app-setings/",
    },
    {
      title: "Clean & Modern Design",
      desc: "Beautifully crafted, clean & modern designed admin theme with 5 different demos & light - dark versions.",
      icon: "bi-brush",
      href: "app-setings/",
    },
    {
      title: "Easy Navigation",
      desc: "Carefully crafted, clean, smart & easy theme navigation with collapsible option.",
      icon: "bi-segmented-nav",
      href: "app-setings/",
    },
    {
      title: "No jQuery Dependency",
      desc: "jQuery is great JS library, But Its not a great idea to use jQuery and React in the same UI.",
      icon: "bi-shield-check",
      href: "app-setings/",
    },
    {
      title: "Colors Options",
      desc: "Unlimited color options allows you to set your application color as per your branding.",
      icon: "bi-droplet-half",
      href: "app-setings/",
    },
    {
      title: "Code Splitting",
      desc: 'To avoid winding up with a large bundle, it’s good to get ahead of the problem and use "Code Splitting".',
      icon: "bi-file-code",
      href: "app-setings/",
    },
    {
      title: "Lazy Loading",
      desc: "Its more efficient to split each routes components into a separate chunk, and only load them when the route is visited.",
      icon: "bi-arrow-clockwise",
      href: "app-setings/",
    },
    {
      title: "Continuous Updates",
      desc: "Regular updates with new demos and features is guaranteed",
      icon: "bi-bag-check",
      href: "app-setings/",
    },
    {
      title: "Quality Code",
      desc: "We follow the best industry code structure that all developers will be able to pick up easily and fall in love",
      icon: "bi-stars",
      href: "app-setings/",
    },
    {
      title: "Support",
      desc: "Premium customer support from the actual people who have created.",
      icon: "bi-person-check",
      href: "app-setings/",
    },
  ];
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Row>
              {features.map((feature) => (
                <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                  {state && <Loader />}
                  {!state && (
                    <>
                      <div>
                        <i className={`bi ${feature.icon} text-primary fs-2`} />

                        <CardTitle tag="h5" className="my-3">
                          {feature.title}
                        </CardTitle>
                        <CardSubtitle className="text-muted col-10">
                          {feature.desc}
                        </CardSubtitle>
                      </div>
                      <div className="justify-content-start d-flex mr-4 mt-3">
                        <Link
                          href={feature.href}
                          type="button"
                          className="btn btn-primary btn-full"
                        >
                          <i class="bi bi-send-check"></i>
                        </Link>
                      </div>
                    </>
                  )}
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

SettingsPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
