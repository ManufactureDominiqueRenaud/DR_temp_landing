import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailVerificationTemplateProps {
  email: string;
  serial: string;
}

export default function EmailVerificationTemplate({
  email,
  serial,
}: EmailVerificationTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>GARANTIE RENAUD TIXIER - Nouvelle demande</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#155dfc",

                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                  DEFAULT: "#314158",
                  foreground: "hsl(var(--primary-foreground))",
                },
                accent: {
                  DEFAULT: "#314158",
                  foreground: "hsl(var(--accent-foreground))",
                },
                muted: {
                  DEFAULT: "hsl(var(--muted))",
                  foreground: "hsl(var(--muted-foreground))",
                },
                destructive: {
                  DEFAULT: "hsl(var(--destructive))",
                  foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                  "1": "hsl(var(--chart-1))",
                  "2": "hsl(var(--chart-2))",
                  "3": "hsl(var(--chart-3))",
                  "4": "hsl(var(--chart-4))",
                  "5": "hsl(var(--chart-5))",
                },
                text: {
                  light: "#314158",
                  dark: "#f1f5f9",
                },
              },
              borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 3.5px)",
                sm: "calc(var(--radius) - 4px)",
              },
            },
          },
        }}
      >
        <Body className="font-sans">
          <Container className="mx-auto mb-5 px-4 py-5">
            <Section className="my-8">
              <Link href="https://www.dominiquerenaud.com">
                <svg
                  id="Calque_1"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1309.3 612.3"
                >
                  <path
                    d="M1107.8,320.7c0,0,0,.1-.1.2,0,0,.1-.1.1-.2Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1105.6,323.5c-.1.2-.3.3-.4.5.1-.2.3-.3.4-.5Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1109.7,317.1c0,0,0,.1,0,.2,0,0,0-.1,0-.2Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1082.2,330c-.4-.2-.7-.5-1-.7.3.3.7.5,1,.7Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1103,326.3c-.2.2-.3.3-.5.4.2-.1.3-.3.5-.4Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1084.8,331.3c-.2,0-.4-.1-.6-.2.2,0,.4.2.6.2Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1081.9,287.1c.8-1,1.7-1.8,2.6-2.6-.9.8-1.8,1.7-2.6,2.6Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1102.9,279.9c.8.3,1.6.7,2.4,1.2-.7-.5-1.5-.9-2.4-1.2Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1073.9,310.4c0-9,3-17.4,8-23.3-5,5.9-8.1,14.4-8.1,23.5s2.5,14.4,6.6,18c-4.1-3.6-6.5-10-6.5-18.3Z"
                    fill="#aaebbb"
                  />
                  <path d="M1109.1,284.8s0,0,0,0c0,0,0,0,0,0Z" fill="#aaebbb" />
                  <path
                    d="M1105.9,281.5c.4.3.9.7,1.3,1-.4-.4-.8-.7-1.3-1Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M733.2,357.1l-20.2,5.1v80l20.3-5.2c20.8-5.3,33.1-24.8,33.1-48.6s-12.2-36.7-33.2-31.3ZM733.1,422.2l-7.6,1.9v-50.3l7.5-1.9c14.5-3.7,20.6,5.9,20.6,19.9s-6,26.7-20.5,30.4Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M809.1,336.3c-19,4.8-32.8,26.1-32.8,49.7s13.8,38.2,32.8,33.3c19.1-4.9,32.8-26.4,32.8-50s-13.7-37.9-32.8-33ZM809.1,403.8c-11.7,3-19.8-6-19.8-20.9s8.2-28.2,19.8-31.2c11.7-3,19.8,6.1,19.8,21.1s-8.1,28-19.8,30.9Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="906.5 331.6 909.9 330.8 909.9 392.2 922.7 388.9 922.7 309 899.9 314.7 889.9 375.9 887.3 376.6 877.3 320.5 854.5 326.3 854.5 406.3 867.3 403 867.3 341.6 870.6 340.8 880.9 399.1 896.2 395.2 906.5 331.6"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="938.2 385 951 381.7 951 301.8 938.2 305 938.2 385"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="1019.9 284.3 1007.9 287.3 1007.9 342.8 1004.6 343.7 983.9 293.4 966.3 297.9 966.3 377.8 978.2 374.8 978.2 319.3 981.5 318.4 1001.9 368.8 1019.9 364.2 1019.9 284.3"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="1048.1 277.1 1035.3 280.3 1035.3 360.3 1048.1 357 1048.1 277.1"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1093.6,264c-19,4.8-32.8,26.1-32.8,49.7s10.8,34.8,26.5,34.3v14.4l12.6-3.2v-14.4c15.7-7.5,26.5-26.8,26.5-47.8s-13.7-37.9-32.8-33ZM1109.7,317.1c0,0,0,.1,0,.2-.6,1.2-1.2,2.3-1.9,3.3,0,0,0,.1-.1.2-.6.9-1.3,1.8-2,2.6-.1.2-.3.3-.4.5-.7.8-1.5,1.6-2.3,2.3-.2.2-.3.3-.5.4-2.6,2.2-5.6,3.9-8.8,4.7-3.2.8-6.2.7-8.8-.2-.2,0-.4-.1-.6-.2-.7-.3-1.4-.6-2-1-.4-.2-.7-.5-1-.7-.2-.2-.5-.4-.7-.6-4.1-3.6-6.6-9.9-6.6-18s3.1-17.6,8.1-23.5c0,0,0,0,0,0,.8-1,1.7-1.8,2.6-2.6,0,0,0,0,.1,0,2.7-2.3,5.7-4,9.1-4.9,3.3-.9,6.4-.7,9,.3,0,0,.1,0,.2,0,.8.3,1.6.7,2.4,1.2.2.1.4.3.6.5.4.3.9.7,1.3,1,.7.7,1.4,1.4,2,2.2,0,0,0,0,0,0,2.7,3.7,4.3,9,4.3,15.5s-1.4,11.9-3.8,16.8Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1174.3,295.1c0,9.8-4.2,17.6-11.7,19.5-7.4,1.9-11.7-3.7-11.7-13.5v-50.1l-12.7,3.2v49.1c0,20,9.6,30,24.5,26.2,15-3.8,24.5-18.6,24.5-38.6v-49.1l-12.8,3.3v50.1Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="1214.5 301.1 1214.5 278.7 1239.4 272.4 1239.4 260.1 1214.5 266.4 1214.5 248.4 1240.5 241.8 1240.5 228.2 1201.7 238 1201.7 318 1241.4 307.9 1241.4 294.2 1214.5 301.1"
                    fill="#aaebbb"
                  />
                  <path
                    d="M761.4,478.4c0-15.4-8-24.1-22.1-20.5l-26.4,6.7v80l12.8-3.3v-28.4l13-3.3,9,26.1,13.5-3.4-10.3-28.8c6.8-5.9,10.5-14.9,10.5-25.1ZM737.1,497.9l-11.3,2.9v-25.9l11.5-2.9c7.9-2,10.9,3.4,10.9,10.1s-3.1,13.8-11.1,15.8Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="786.8 489.7 811.7 483.4 811.7 471.1 786.8 477.4 786.8 459.4 812.8 452.8 812.8 439.2 774 449 774 529 813.7 518.9 813.7 505.2 786.8 512.1 786.8 489.7"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="868.2 480.6 864.9 481.5 844.3 431.2 826.6 435.7 826.6 515.6 838.6 512.6 838.6 457 841.9 456.2 862.2 506.6 880.2 502 880.2 422 868.2 425.1 868.2 480.6"
                    fill="#aaebbb"
                  />
                  <path
                    d="M905.9,415.5l-14.9,83.7,13.1-3.3,3.4-21.3,19.6-5,3.4,19.6,13.2-3.4-14.9-76.2-23,5.8ZM909.7,461.1l5.3-33.2,4.7-1.2,5.3,30.5-15.3,3.9Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M989,444.5c0,9.8-4.2,17.6-11.7,19.5-7.4,1.9-11.7-3.7-11.7-13.5v-50.1l-12.7,3.2v49.1c0,20,9.6,30,24.5,26.2,15-3.8,24.5-18.6,24.5-38.6v-49.1l-12.8,3.3v50.1Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1036.6,382.3l-20.2,5.1v80l20.3-5.2c20.8-5.3,33.1-24.8,33.1-48.6s-12.2-36.7-33.2-31.3ZM1036.4,447.4l-7.6,1.9v-50.3l7.5-1.9c14.5-3.7,20.6,5.9,20.6,19.9s-6,26.7-20.5,30.4Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="102.9 137.7 100.3 136.9 90.4 75.3 67.9 68.5 67.9 148.5 80.5 152.3 80.5 90.9 83.8 91.9 94 155.9 109.1 160.5 119.3 102.5 122.7 103.5 122.7 164.9 135.4 168.7 135.4 88.8 112.8 82 102.9 137.7"
                    fill="#aaebbb"
                  />
                  <path
                    d="M160.8,96.4l-14.7,75.5,13,3.9,3.3-19.5,19.4,5.8,3.3,21.5,13.1,3.9-14.7-84.4-22.7-6.8ZM164.5,144.1l5.2-30.3,4.7,1.4,5.2,33.4-15.1-4.5Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="249.9 178.8 246.7 177.8 226.3 116.1 208.8 110.9 208.8 190.8 220.6 194.4 220.6 138.8 223.9 139.8 244 201.4 261.8 206.7 261.8 126.8 249.9 123.2 249.9 178.8"
                    fill="#aaebbb"
                  />
                  <path
                    d="M311.9,191.9c0,9.8-4.2,15.3-11.5,13.1-7.4-2.2-11.6-10.2-11.6-20v-50.1s-12.6-3.8-12.6-3.8v49.1c0,20,9.5,35.3,24.2,39.7,14.8,4.4,24.2-5.1,24.2-25.1v-49.1s-12.7-3.8-12.7-3.8v50.1Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="338.9 229.9 351.6 233.7 351.6 197.7 367.4 202.4 367.4 190.2 351.6 185.4 351.6 167.4 368.7 172.5 368.7 158.9 338.9 150 338.9 229.9"
                    fill="#aaebbb"
                  />
                  <path
                    d="M388.5,164.8l-14.7,75.5,13,3.9,3.3-19.5,19.4,5.8,3.3,21.5,13.1,3.9-14.7-84.4-22.7-6.8ZM392.3,212.6l5.2-30.3,4.7,1.4,5.2,33.4-15.1-4.5Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M465.2,201.8c9.1,2.7,15.5,11.6,18.3,22.4l12.9,3.9c-2.9-20.3-15.5-37.1-31.2-41.8-18.7-5.6-32.3,8.1-32.3,31.7s13.6,45.8,32.3,51.4c15.9,4.8,28.3-4.8,31.2-23.9l-12.7-3.8c-2.5,9.7-9.2,14.9-18.5,12.2-11.4-3.4-19.4-16.9-19.4-31.7s8-23.7,19.4-20.3Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="502.9 212.8 515.8 216.7 515.8 283 528.4 286.8 528.4 220.5 541.3 224.4 541.3 210.8 502.9 199.2 502.9 212.8"
                    fill="#aaebbb"
                  />
                  <path
                    d="M586.7,274.5c0,9.8-4.2,15.3-11.5,13.1-7.4-2.2-11.6-10.2-11.6-20v-50.1s-12.6-3.8-12.6-3.8v49.1c0,20,9.5,35.3,24.2,39.7,14.8,4.4,24.2-5.1,24.2-25.1v-49.1s-12.7-3.8-12.7-3.8v50.1Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M661.6,273c0-15.4-7.9-28.5-21.8-32.7l-26.1-7.8v80s12.7,3.8,12.7,3.8v-28.4l12.8,3.9,8.9,31,13.3,4-10.2-34.5c6.7-2.1,10.4-9.1,10.4-19.3ZM637.6,279.1l-11.2-3.4v-25.9l11.4,3.4c7.8,2.4,10.8,9.4,10.8,16.1s-3,12.1-10.9,9.7Z"
                    fill="#aaebbb"
                  />
                  <polygon
                    points="686.7 298.3 711.2 305.7 711.2 293.5 686.7 286.1 686.7 268.1 712.4 275.8 712.4 262.1 674 250.6 674 330.6 713.3 342.4 713.3 328.7 686.7 320.7 686.7 298.3"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1084.2,331c-.7-.3-1.4-.6-2-1,.6.4,1.3.8,2,1Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1109.6,317.3c-.6,1.2-1.2,2.3-1.9,3.3.7-1.1,1.3-2.2,1.9-3.3Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1102.7,279.8c0,0,.1,0,.2,0,0,0-.1,0-.2,0Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1109.1,284.8c-.6-.8-1.3-1.5-2-2.2.7.7,1.4,1.4,2,2.2Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1081.1,329.2c-.2-.2-.5-.4-.7-.6.2.2.5.4.7.6Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1107.6,320.9c-.6.9-1.3,1.8-2,2.6.7-.8,1.3-1.7,2-2.6Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1105.2,281.1c.2.1.4.3.6.5-.2-.2-.4-.3-.6-.5Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1113.4,300.6c0,6-1.3,11.7-3.7,16.6,2.4-4.9,3.8-10.7,3.8-16.8s-1.6-11.8-4.3-15.5c2.7,3.8,4.3,9.2,4.3,15.8Z"
                    fill="#aaebbb"
                  />
                  <path
                    d="M1084.5,284.5s0,0,.1,0c0,0,0,0-.1,0Z"
                    fill="#aaebbb"
                  />
                  <path d="M1081.9,287.1s0,0,0,0c0,0,0,0,0,0Z" fill="#aaebbb" />
                  <path
                    d="M1105.3,324c-.7.8-1.5,1.6-2.3,2.3.8-.7,1.6-1.5,2.3-2.3Z"
                    fill="#aaebbb"
                  />
                </svg>
              </Link>
            </Section>

            <Section className="mb-6 flex flex-col items-center justify-center rounded-[12px] bg-[hsl(240,4.8%,95.9%)]/50">
              <table
                style={{
                  border: "1px solid rgb(39 39 42 / 0.1)",
                  borderRadius: "8px",
                  borderCollapse: "collapse",
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                  alignItems: "center",
                  padding: "24px",
                }}
              >
                <tr>
                  <td>
                    <Section className="mt-4">
                      <Text className="text-text-light dark:text-text-dark m-0 p-0 text-lg font-semibold leading-tight">
                        Bonjour !
                      </Text>
                    </Section>

                    <Section>
                      <Text className="text-text-light dark:text-text-dark text-base">
                        Une nouvelle demande de garantie a été soumise via le
                        formulaire en ligne du site Dominique Renaud.
                      </Text>
                      <Text className="text-text-light dark:text-text-dark mt-4 text-base">
                        <strong>Email du demandeur :</strong> {email}
                        <br />
                        <strong>Numéro de série :</strong> {serial}
                      </Text>
                      <Text className="text-text-light dark:text-text-dark m-0 mt-4 p-0 text-base">
                        Vous pouvez dès à présent traiter cette demande.
                      </Text>
                    </Section>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailVerificationTemplate.PreviewProps = {
  email: "test@test.fr",
  serial: "596853",
} satisfies EmailVerificationTemplateProps;