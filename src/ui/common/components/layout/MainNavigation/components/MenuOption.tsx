import React, { useCallback, useState, useRef } from "react";
import { Button } from "primereact/button";
import styled from "styled-components";
import { OverlayPanel } from "primereact/overlaypanel";

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 250px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#8080806b" : "none")};
  color: white;
  text-decoration-line: none;
  transition: text-decoration-line 0.3s ease;
  &:hover {
    text-decoration-line: underline;
  }
`;

const SubMenList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SubMenuItem = styled.li`
  font-size: 1rem;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration-line: none;
  transition: text-decoration-line 0.3s ease;
  &:hover {
    text-decoration-line: underline;
  }
`;

type MenuSectionProps = {
  section: string;
};

function MenuSection({ section }: MenuSectionProps) {
  switch (section) {
    case "last-masterclasses":
      return (
        <SubMenList>
          <SubMenuItem>Les dernières masterclasses</SubMenuItem>
          <SubMenuItem>Masterclasses à venir</SubMenuItem>
          <SubMenuItem>Demander à intervenir sur une masterclass</SubMenuItem>
        </SubMenList>
      );
    case "member-space":
    default:
      return (
        <SubMenList>
          <SubMenuItem>Les règles d&apos;adhésion</SubMenuItem>
          <SubMenuItem>Chartes éthique</SubMenuItem>
          <SubMenuItem>Tarifs et cotisations</SubMenuItem>
          <SubMenuItem>
            <Button
              icon="pi pi-lock"
              label="Accéder à l'espace membre"
              className="bg-fuchsia-500 border-nonde"
            />
          </SubMenuItem>
        </SubMenList>
      );
  }
}

export function MenuOption() {
  const op = useRef<OverlayPanel>(null);
  const [activeMenuSection, setActiveMenuSection] =
    useState<string>("member-space");

  const handleMenuSectionChange = useCallback(
    (section: string) => () => {
      setActiveMenuSection(section);
    },
    []
  );

  return (
    <>
      <Button
        onClick={(event) => op.current?.toggle(event)}
        icon={<i className="pi pi-bars mr-2" style={{ color: "#d946ef" }}></i>}
        label="Menu"
        className="bg-blue-900 border-none"
      />
      <OverlayPanel
        ref={op}
        showCloseIcon
        closeOnEscape
        dismissable={false}
        className="bg-blue-900"
      >
        <div className="flex flex-row gap-8 items-start p-4">
          <MenuList className="flex flex-col gap-2">
            <MenuItem
              active={activeMenuSection === "member-space"}
              onClick={handleMenuSectionChange("member-space")}
            >
              <span>Espace Membre</span>
              {activeMenuSection === "member-space" && (
                <i
                  className="pi pi-chevron-right"
                  style={{ fontSize: "1rem" }}
                ></i>
              )}
            </MenuItem>
            <MenuItem
              active={activeMenuSection === "last-masterclasses"}
              onClick={handleMenuSectionChange("last-masterclasses")}
            >
              <span>Dernières Masterclass</span>
              {activeMenuSection === "last-masterclasses" && (
                <i
                  className="pi pi-chevron-right"
                  style={{ fontSize: "1rem" }}
                ></i>
              )}
            </MenuItem>
            <MenuItem
              active={activeMenuSection === "last-event"}
              onClick={handleMenuSectionChange("last-event")}
            >
              <span>Derniers événements</span>
              {activeMenuSection === "last-event" && (
                <i
                  className="pi pi-chevron-right"
                  style={{ fontSize: "1rem" }}
                ></i>
              )}
            </MenuItem>
            <MenuItem
              active={activeMenuSection === "actuality-blog"}
              onClick={handleMenuSectionChange("actuality-blog")}
            >
              <span>Actualité - Blog</span>
              {activeMenuSection === "actuality-blog" && (
                <i
                  className="pi pi-chevron-right"
                  style={{ fontSize: "1rem" }}
                ></i>
              )}
            </MenuItem>
          </MenuList>
          <MenuSection section={activeMenuSection} />
        </div>
      </OverlayPanel>
    </>
  );
}
