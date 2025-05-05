import { UniversityProps } from "../types/universityTypes";
import { addTheseToStudienkollegs } from "./tempUniversities";

// These are only examples, you should replace with your actual data
export const studienkollegs: UniversityProps[] = [
  {
    id: "studienkolleg-munchen",
    name: "Studienkolleg München",
    description: "Das Studienkolleg München bereitet internationale Studierende auf ein Studium an deutschen Hochschulen vor.",
    location: "München",
    imageUrl: "https://images.unsplash.com/photo-1577628629136-d9afc0faqjk?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    type: "Studienkolleg"
  },
  {
    id: "studienkolleg-berlin",
    name: "Studienkolleg Berlin",
    description: "Das Studienkolleg Berlin bereitet internationale Studierende auf ein Studium an deutschen Hochschulen vor.",
    location: "Berlin",
    imageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    type: "Studienkolleg"
  },
  {
    id: "studienkolleg-hamburg",
    name: "Studienkolleg Hamburg",
    description: "Das Studienkolleg Hamburg bereitet internationale Studierende auf ein Studium an deutschen Hochschulen vor.",
    location: "Hamburg",
    imageUrl: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    type: "Studienkolleg"
  },
  // Add the list of universities from tempUniversities
  ...addTheseToStudienkollegs
];
