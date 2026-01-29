import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SearchBar({ icon, label, className }) {
  return (
    <Field>
      {label && <FieldLabel htmlFor="input-group-url">{label}</FieldLabel>}
      <InputGroup className={className}>
        <InputGroupInput
          id="input-group-url"
          placeholder="Search by phone number, issue type..."
        />
        <InputGroupAddon>{icon}</InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
