import {
  AccordionProvider,
  Alert,
  Heading,
  Icon,
  CardAsLink,
  LinkList,
  LinkListLink,
  Paragraph,
} from "@rijkshuisstijl-community/components-react";
import { PageBody } from "@utrecht/page-body-react";
import "@rijkshuisstijl-community/design-tokens/dist/index.css";
import "@rijkshuisstijl-community/components-css/dist/index.css";
import './App.css';

function App() {
  return (
    <>
      <PageBody className="rhc-page-content__container rhc-theme">
        <Alert type="info">
          <Heading level={3}>Heading</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do
            eiusmod *
          </Paragraph>
        </Alert>
        <Heading appearanceLevel={3} level={1}>
          Lorem ipsum
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do
          eiusmod *
        </Paragraph>
        <div className="rhc-column-layout">
            <CardAsLink
              appearance="default"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              heading="Card Heading"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="./assets/placeholder.jpg"
              linkLabel="Link label"
              metadata="Metadata"
              title="Card Title"
            />
            <div>
              <Heading level={3}>Heading</Heading>
              <LinkList>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Learn about <i lang="fr">joi de vivre</i>, an essential
                  foreign phrase!
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Link 2
                </LinkListLink>
                <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
                  Link 3
                </LinkListLink>
              </LinkList>
            </div>
        </div>
        <div>
          <Heading level={2}>Heading</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do
            eiusmod *
          </Paragraph>
          <AccordionProvider
            sections={[
              {
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                expanded: true,
                label: "Text",
              },
              {
                body: "Humblebrag mixtape sus, cornhole woke mlkshk cardigan twee cronut. Health goth vape adaptogen actually vegan, viral austin kinfolk trust fund paleo PBR&B literally skateboard woke. Echo park ugh fit cupping affogato, lyft asymmetrical portland live-edge franzen you probably haven't heard of them meh VHS chambray. Narwhal fam prism slow-carb yes plz. Fam edison bulb kitsch disrupt deep v big mood, JOMO church-key pop-up chicharrones pork belly glossier. Pinterest freegan swag mumblecore prism.",
                expanded: false,
                label: "Hipster lorem ipsum",
              },
              {
                body: "De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.",
                expanded: false,
                label: "Nederlandse lorem ipsum",
              },
              {
                body: "De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.",
                expanded: false,
                label: "Nederlandse lorem ipsum",
              },
              {
                body: "De volle maan, tragisch dien avond, was reeds vroeg, nog in den laatsten dagschemer opgerezen als een immense, bloedroze bol, vlamde als een zonsondergang laag achter de tamarindeboomen der Lange Laan en steeg, langzaam zich louterende van hare tragische tint, in een vagen hemel op. Een doodsche stilte spande alom als een sluier van zwijgen, of, na de lange middagsiësta, de avondrust zonder overgang van leven begon.",
                expanded: false,
                label: "Nederlandse lorem ipsum",
              },
            ]}
          />
        </div>
        ;
      </PageBody>
    </>
  );
}

export default App;
