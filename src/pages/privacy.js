import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Privacy() {
  const context = useDocusaurusContext();

  return (
    <Layout
      title={`Akarui Development Team`}
      description="The official aoi.js documentation | Powered by Akarui Development Team."
    >
      <div style={{ margin: "8px" }} />
      <div className="container">
        <div className={`${styles.privacyItem}`}>
          <div className={`${styles.privacyHeaderItem}`}>
            Cookie & OAuth2 Policy
          </div>
          <div style={{ margin: "4px" }} />
          This Cookie and OAuth2 Policy explains how{" "}
          <a href="https://aoi.js.org/">aoi.js.org</a> ("we", "us" or "our")
          uses cookies and OAuth2 authentication on our website aoi.js.org (the
          "Website"). This policy outlines what cookies and OAuth2 are, how we
          use them, and your choices regarding their use.
        </div>
        <div className={`${styles.privacyContainer}`}>
          <div className={`${styles.privacyItem}`}>
            <div className={`${styles.privacyHeaderItem}`}>
              What are cookies?
            </div>
            Cookies are small text files that are placed on your device
            (computer, smartphone, tablet, etc.) by websites you visit. They
            store information about your browsing activities and enable the
            website to remember your preferences, recognize your device, and
            provide you with a more personalized experience.
          </div>
        </div>
        <div className={`${styles.privacyContainer}`}>
          <div className={`${styles.privacyItem}`}>
            <div className={`${styles.privacyHeaderItem}`}>
              How we use cookies
            </div>
            We use cookies on our Website to enhance the user experience,
            improve our services, and understand how visitors interact with our
            Website. Cookies may collect information such as your IP address,
            browser type, device information, and browsing patterns. We may also
            use cookies to analyze website traffic and track user preferences.
            Specifically, we use the following types of cookies
            <div className={`${styles.privacyHeaderItemSmall}`}>
              Essential Cookies
            </div>
            These cookies are necessary for the proper functioning of our
            Website. They enable core functionality, such as accessing secure
            areas, navigating between pages, and using our services. Disabling
            these cookies may impact the performance and functionality of the
            Website.
            <div className={`${styles.privacyHeaderItemSmall}`}>
              Analytics Cookies
            </div>
            We use analytics cookies to gather information about how visitors
            use our Website. This helps us analyze data, improve our Website's
            performance, and optimize the user experience. The information
            collected is aggregated and anonymous, and we do not use it to
            personally identify individuals.
          </div>
        </div>
        <div className={`${styles.privacyContainer}`}>
          <div className={`${styles.privacyItem}`}>
            <div className={`${styles.privacyHeaderItem}`}>
              OAuth2 Authentication
            </div>
            In addition to cookies, we also use OAuth2 authentication on our
            Website. OAuth2 is an open standard protocol that allows users to
            authenticate and authorize access to their accounts on other
            platforms without sharing their login credentials with us. It
            enables a secure and seamless authentication process. When you
            choose to log in or connect with your account from supported
            platforms using OAuth2, such as Google or GitHub, you will be
            redirected to their respective authentication pages. The
            authentication process occurs directly between you and the platform,
            and we do not have access to your login credentials. Once
            authorized, the platform generates an access token that allows you
            to access specific features on our Website.
          </div>
        </div>
        <div className={`${styles.privacyContainer}`}>
          <div className={`${styles.privacyItem}`}>
            <div className={`${styles.privacyHeaderItem}`}>
              Third-party cookies
            </div>
            Our Website may contain links to third-party websites or services
            that may use cookies. We do not have control over these cookies or
            the data they collect. We recommend reviewing the cookie policies of
            these third-party websites or services for more information.
          </div>
        </div>
        <div className={`${styles.privacyContainer}`}>
          <div className={`${styles.privacyItem}`}>
            <div className={`${styles.privacyHeaderItem}`}>
              Updates to this policy
            </div>
            We may update this Cookie and OAuth2 Policy from time to time to
            reflect changes in our practices or legal obligations. We will post
            the updated version on our Website and indicate the effective date
            of the revision. We encourage you to review this policy periodically
            for any updates.
          </div>
        </div>
        <div className={`${styles.privacyContainer}`}>
          <div className={`${styles.privacyItem}`}>
            <div className={`${styles.privacyHeaderItem}`}>Contact us</div>
            If you have any questions or concerns about our Cookie and OAuth2
            Policy, please contact us at{" "}
            <a href="">leref@akaruidevelopment.org</a>. By using our Website,
            you agree to the use of cookies and OAuth2 as described in this
            Cookie and OAuth2 Policy.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
