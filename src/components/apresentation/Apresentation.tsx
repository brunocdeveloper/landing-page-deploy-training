import ApresentationIcon from "../../assets/ApresentationIcon";
import Box from "../box/Box";
import Button from "../button/Button";
import Text from "../text/Text";
import { theme } from "../../theme/theme";

const Apresentation = () => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mt={113}>
      <Box ml={58}>
        <Text
          text="Esse livro é incrivel"
          fontSize={55}
          fontWeight={600}
          color={theme.colors.titleH1}
        />
        <Text
          mt={12}
          text="O melhor livro do mundo com tudo que você precisa saber sobre:"
          fontSize={28}
          fontWeight={600}
          color={theme.colors.textButton}
        />
        <Text
          mt={20}
          text="* Criaturas Fantásticas"
          fontSize={26}
          fontWeight={600}
          color={theme.colors.textButton}
        />
        <Text
          mt={12}
          text="* Rebimbocas da Parafusadeira"
          fontSize={26}
          fontWeight={600}
          color={theme.colors.textButton}
        />

        <Button
          mt={38}
          backgroundColor={theme.colors.bkgButton}
          width={279}
          height={50}
          borderRadius={50}
          text="Assinar"
          fontWeight={600}
          color={theme.colors.textButton}
          fontSize={20}
        />
      </Box>
      <ApresentationIcon />
    </Box>
  );
};

export default Apresentation;
