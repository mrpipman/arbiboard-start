
def generate_explainability_prompt(features: dict, shap_values: dict, threshold=0.01):
    """
    Genera un prompt GPT con spiegazione causale delle feature principali.
    """
    explanation = "Ecco le principali ragioni dietro la decisione del modello:\n"
    sorted_features = sorted(shap_values.items(), key=lambda x: abs(x[1]), reverse=True)
    for feat, val in sorted_features:
        if abs(val) < threshold:
            continue
        trend = "aumenta" if val > 0 else "riduce"
        explanation += f"- La feature '{feat}' {trend} la probabilità di successo (SHAP: {val:.2f})\n"
    return explanation
