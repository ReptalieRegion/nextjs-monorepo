import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useCallback,
  useState,
} from "react";

type UseSearchBoxState = {
  initialValue?: string;
};

interface UseSearchBoxActions {
  onSearch?(value: string): void;
}

type UseSearchBoxProps = UseSearchBoxState & UseSearchBoxActions;

export default function useSearchBox({
  initialValue,
  onSearch,
}: UseSearchBoxProps): {
  state: string;
  api: {
    input: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
  };
} {
  const [searchTerm, setSearchTerm] = useState(initialValue ?? "");

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSearch?.(searchTerm);
      }
    },
    []
  );

  return {
    state: searchTerm,
    api: {
      input: {
        onChange: handleChange,
        onKeyDown: handleKeyPress,
      },
    },
  };
}
