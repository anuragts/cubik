import { Box, Center } from "@chakra-ui/react";
import {
  OptionProps,
  Props,
  Select,
  SingleValueProps,
  components,
} from "chakra-react-select";
import { useEffect } from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { DonationFormType } from "./ProjectDonationSimulator";
import { tokenList } from "@/utils/helpers/tokenlist";

export const token = tokenList;

type ControlledSelectProps = UseControllerProps<DonationFormType> &
  Props & {
    label: string;
  };

interface SelectOption {
  label: string;
  value: string;
  icon: JSX.Element; // or React.ReactNode if you prefer
}

const customComponents = {
  Option: ({ children, ...props }: OptionProps<SelectOption, false>) => (
    <components.Option {...props}>
      <Box
        minW="6rem !important"
        fontWeight={"700"}
        margin="-8px -12px"
        padding="8px 12px"
        backgroundColor={props.isSelected ? "#14665B" : "#001F1B"}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        textColor={"white"}
        _hover={{
          backgroundColor: "#A8F0E6",
          color: "black",
        }}
      >
        <Center w="20px" height="20px" mr="5px">
          {/* {props.data.icon} */}
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_789_9405)">
              <path
                d="M5 10C7.77085 10 10 7.77085 10 5C10 2.22915 7.77085 0 5 0C2.22915 0 0 2.22915 0 5C0 7.77085 2.22915 10 5 10Z"
                fill="#2775CA"
              />
              <path
                d="M6.37515 5.79102C6.37515 5.06187 5.93765 4.81187 5.06265 4.70772C4.43765 4.62437 4.31265 4.45772 4.31265 4.16602C4.31265 3.87432 4.521 3.68687 4.93765 3.68687C5.31265 3.68687 5.521 3.81187 5.62515 4.12437C5.646 4.18687 5.7085 4.22852 5.771 4.22852H6.1043C6.18765 4.22852 6.25015 4.16602 6.25015 4.08272V4.06187C6.1668 3.60352 5.7918 3.24937 5.31265 3.20772V2.70772C5.31265 2.62437 5.25015 2.56187 5.146 2.54102H4.8335C4.75015 2.54102 4.68765 2.60352 4.6668 2.70772V3.18687C4.0418 3.27022 3.646 3.68687 3.646 4.20772C3.646 4.89522 4.06265 5.16602 4.93765 5.27022C5.521 5.37437 5.7085 5.49937 5.7085 5.83272C5.7085 6.16607 5.4168 6.39522 5.021 6.39522C4.4793 6.39522 4.2918 6.16602 4.2293 5.85352C4.2085 5.77022 4.146 5.72852 4.0835 5.72852H3.7293C3.646 5.72852 3.5835 5.79102 3.5835 5.87437V5.89522C3.6668 6.41602 4.00015 6.79102 4.68765 6.89522V7.39522C4.68765 7.47852 4.75015 7.54102 4.8543 7.56187H5.1668C5.25015 7.56187 5.31265 7.49937 5.3335 7.39522V6.89522C5.9585 6.79102 6.37515 6.35352 6.37515 5.79102Z"
                fill="white"
              />
              <path
                d="M3.93742 7.97978C2.31242 7.39648 1.47907 5.58398 2.08327 3.97978C2.39577 3.10478 3.08327 2.43813 3.93742 2.12563C4.02077 2.08398 4.06242 2.02148 4.06242 1.91728V1.62563C4.06242 1.54228 4.02077 1.47978 3.93742 1.45898C3.91657 1.45898 3.87492 1.45898 3.85407 1.47978C1.87492 2.10478 0.791568 4.20898 1.41657 6.18813C1.79157 7.35478 2.68742 8.25063 3.85407 8.62563C3.93742 8.66728 4.02077 8.62563 4.04157 8.54228C4.06242 8.52148 4.06242 8.50063 4.06242 8.45898V8.16728C4.06242 8.10478 3.99992 8.02148 3.93742 7.97978ZM6.14577 1.47978C6.06242 1.43813 5.97907 1.47978 5.95827 1.56313C5.93742 1.58398 5.93742 1.60478 5.93742 1.64648V1.93813C5.93742 2.02148 5.99992 2.10478 6.06242 2.14648C7.68742 2.72978 8.52077 4.54228 7.91657 6.14648C7.60407 7.02148 6.91657 7.68813 6.06242 8.00063C5.97907 8.04228 5.93742 8.10478 5.93742 8.20898V8.50063C5.93742 8.58398 5.97907 8.64648 6.06242 8.66728C6.08327 8.66728 6.12492 8.66728 6.14577 8.64648C8.12492 8.02148 9.20827 5.91728 8.58327 3.93813C8.20827 2.75063 7.29157 1.85478 6.14577 1.47978Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_789_9405">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Center>
        {children}
      </Box>
    </components.Option>
  ),
  SingleValue: ({ children, ...props }: SingleValueProps<SelectOption>) => (
    <components.SingleValue {...props}>
      <Box
        w="100%"
        fontWeight={"700"}
        m="0"
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        textColor={"white"}
      >
        <Center w="20px" height="20px" mr="5px">
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_789_9405)">
              <path
                d="M5 10C7.77085 10 10 7.77085 10 5C10 2.22915 7.77085 0 5 0C2.22915 0 0 2.22915 0 5C0 7.77085 2.22915 10 5 10Z"
                fill="#2775CA"
              />
              <path
                d="M6.37515 5.79102C6.37515 5.06187 5.93765 4.81187 5.06265 4.70772C4.43765 4.62437 4.31265 4.45772 4.31265 4.16602C4.31265 3.87432 4.521 3.68687 4.93765 3.68687C5.31265 3.68687 5.521 3.81187 5.62515 4.12437C5.646 4.18687 5.7085 4.22852 5.771 4.22852H6.1043C6.18765 4.22852 6.25015 4.16602 6.25015 4.08272V4.06187C6.1668 3.60352 5.7918 3.24937 5.31265 3.20772V2.70772C5.31265 2.62437 5.25015 2.56187 5.146 2.54102H4.8335C4.75015 2.54102 4.68765 2.60352 4.6668 2.70772V3.18687C4.0418 3.27022 3.646 3.68687 3.646 4.20772C3.646 4.89522 4.06265 5.16602 4.93765 5.27022C5.521 5.37437 5.7085 5.49937 5.7085 5.83272C5.7085 6.16607 5.4168 6.39522 5.021 6.39522C4.4793 6.39522 4.2918 6.16602 4.2293 5.85352C4.2085 5.77022 4.146 5.72852 4.0835 5.72852H3.7293C3.646 5.72852 3.5835 5.79102 3.5835 5.87437V5.89522C3.6668 6.41602 4.00015 6.79102 4.68765 6.89522V7.39522C4.68765 7.47852 4.75015 7.54102 4.8543 7.56187H5.1668C5.25015 7.56187 5.31265 7.49937 5.3335 7.39522V6.89522C5.9585 6.79102 6.37515 6.35352 6.37515 5.79102Z"
                fill="white"
              />
              <path
                d="M3.93742 7.97978C2.31242 7.39648 1.47907 5.58398 2.08327 3.97978C2.39577 3.10478 3.08327 2.43813 3.93742 2.12563C4.02077 2.08398 4.06242 2.02148 4.06242 1.91728V1.62563C4.06242 1.54228 4.02077 1.47978 3.93742 1.45898C3.91657 1.45898 3.87492 1.45898 3.85407 1.47978C1.87492 2.10478 0.791568 4.20898 1.41657 6.18813C1.79157 7.35478 2.68742 8.25063 3.85407 8.62563C3.93742 8.66728 4.02077 8.62563 4.04157 8.54228C4.06242 8.52148 4.06242 8.50063 4.06242 8.45898V8.16728C4.06242 8.10478 3.99992 8.02148 3.93742 7.97978ZM6.14577 1.47978C6.06242 1.43813 5.97907 1.47978 5.95827 1.56313C5.93742 1.58398 5.93742 1.60478 5.93742 1.64648V1.93813C5.93742 2.02148 5.99992 2.10478 6.06242 2.14648C7.68742 2.72978 8.52077 4.54228 7.91657 6.14648C7.60407 7.02148 6.91657 7.68813 6.06242 8.00063C5.97907 8.04228 5.93742 8.10478 5.93742 8.20898V8.50063C5.93742 8.58398 5.97907 8.64648 6.06242 8.66728C6.08327 8.66728 6.12492 8.66728 6.14577 8.64648C8.12492 8.02148 9.20827 5.91728 8.58327 3.93813C8.20827 2.75063 7.29157 1.85478 6.14577 1.47978Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_789_9405">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Center>
        {children}
      </Box>
    </components.SingleValue>
  ),
};

export const ControlledSelect = ({
  control,
  name,
  rules,
  ...props
}: ControlledSelectProps) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController<DonationFormType>({
    name,
    control,
    rules, // @ts-ignore
    defaultValue: token[0],
  });

  useEffect(() => {
    onChange(token[0]);
  }, [onChange]);

  return (
    <Select
      useBasicStyles
      name={name}
      ref={ref}
      onChange={onChange}
      defaultValue={token[0]}
      onBlur={onBlur}
      value={value}
      // @ts-ignore
      components={customComponents}
      placeholder="Token"
      variant="unstyled"
      colorScheme="none"
      chakraStyles={{
        option: (provided, state) => ({
          ...provided,
          bg: state.isSelected ? "red.500" : "green.500",
          _hover: {
            bg: "pink.500",
          },
        }),
        container: (provided) => ({
          ...provided,
          w: "130px !important",
          m: "0",
          padding: "10px",
          paddingEnd: "0 !important",
          backgroundColor: "#001F1B !important",
          border: "1px solid #E0FFFD16",
          rounded: "8px",
          _placeholder: { fontSize: "md", pl: "20px" },
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "#fff",
          fontWeight: "600",
          backgroundColor: "#001F1B !important",
          background: "#001F1B !important",
        }),
        valueContainer: (provided) => ({
          ...provided,
          paddingStart: "10px",
          color: "#fff",
          fontWeight: "600",
          alignItems: "end",
          textAlign: "end",
          p: "0",
          //pl: '8px',
          w: "110px !important",
          display: "flex",
          justifyContent: "end",
        }),
        input: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          p: "0",
          w: "30px",
          transform: "translateX(-4px)",
          outline: "none",
          boxShadow: "none",
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: "none",
        }),
        inputContainer: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
          display: "none",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          p: 0,
          backgroundColor: "transparent",
          marginEnd: "0px",
          color: "white",
          border: "none",
          outline: "none",
          w: "30px !important",
        }),
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "transparent",
          borderBottomLeftRadius: state.menuIsOpen ? 0 : "md",
          borderBottomRightRadius: state.menuIsOpen ? 0 : "md",
          transitionDuration: 0,
          width: "100%",
          border: "none",
          outline: "none",
          boxShadow: "none",
          rounded: "8px",
          _hover: {
            border: "none",
            boxShadow: "none",
            outline: "none",
            borderRight: "none",
          },
          _active: {
            border: "none",
            boxShadow: "none",
            outline: "none",
            borderRight: "none",
          },
          _focus: {
            border: "none",
            boxShadow: "none",
            outline: "none",
            borderRight: "none",
          },
        }),
        menu: (provided) => ({
          ...provided,
          my: 0,
          padding: "0",
          backgroundColor: "#001F1B",
          fontSize: "sm",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          shadow: `0 0 0 1px #242424`,
          borderWidth: "1px",
          borderRadius: "8px",
          borderColor: "#E0FFFD16",
        }),
        menuList: (provided, state) => ({
          //...provided,
          backgroundColor: "#001F1B",
          borderWidth: "0px",
          borderBottomRadius: "8px",
        }),
      }}
      {...props}
    />
  );
};
