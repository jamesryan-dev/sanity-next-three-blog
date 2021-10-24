import S from "@sanity/desk-tool/structure-builder";
import { BiLoader } from "react-icons/bi";
import { ImStack } from "react-icons/im"
import { BsPersonBoundingBox } from "react-icons/bs";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Loading Screen")
        .icon(BiLoader)
        .child(
          S.editor()
            .title("Loading screen")
            .id("loadingScreen")
            .schemaType("loadingScreen")
            .documentId("singleton-loadingScreen")
        ),
      S.listItem()
      .title("Page Builder")
      .icon(ImStack)
      .child(
        S.editor()
          .title("Page builder")
          .id("page")
          .schemaType("page")
          .documentId("singleton-page")
      ),
      S.listItem()
        .title("Settings")
        .icon(BsPersonBoundingBox)
        .child(
          S.editor()
            .title("Page Settings")
            .id("about")
            .schemaType("about")
            .documentId("singleton-about")
        ),

      ...S.documentTypeListItems().filter(
        (listItem) => !["loadingScreen", "about", "page"].includes(listItem.getId())
      ),
    ]);
